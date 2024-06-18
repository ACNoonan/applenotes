"use client";

import { createClient } from "@/utils/supabase/client";
import NewNoteContent from "./new-note-content";
import NewNoteHeader from "./new-note-header";
import NoteContent from "./note-content";
import NoteHeader from "./note-header";
import { toast } from "./ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Note({ note }: { note: any }) {
  const supabase = createClient();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.metaKey) {
      saveNote();
    }
  };

  async function saveNote() {
    const newNote = {
      content: content,
      title: title,
      emoji: emoji,
    };

    try {
      const { error } = await supabase
        .from("notes")
        .update(newNote)
        .match({ slug: note.slug });

      if (error) {
        console.error("Error updating note:", error);
      } else {
        toast({
          title: "Thanks for your note 🙂",
          description: "Your note will appear only to you in this session",
        });
        router.push(`/${note.slug}`);
        router.refresh();
      }
    } catch (error) {
      console.error("Error processing request:", error);
    }
  }

  if (note.title === "new note") {
    return (
      <div>
        <NewNoteHeader note={note} setTitle={setTitle} setEmoji={setEmoji} />
        <NewNoteContent
          setContent={setContent}
          handleKeyPress={handleKeyPress}
        />
        <p
          className="text-xs text-muted-foreground pt-2 cursor-pointer"
          onClick={saveNote}
        >
          Press ⌘ + Enter or click to save note
        </p>
      </div>
    );
  }
  return (
    <div>
      <NoteHeader note={note} />
      <NoteContent note={note} />
    </div>
  );
}
