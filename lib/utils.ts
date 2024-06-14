import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sidebarItems = [
  {
    title: "alana's notepad",
    subtitle: "hi, welcome...",
    href: "/",
  },
  {
    title: "groceries 🍎",
    href: "/",
  },
  {
    title: "priorities ✨",
    href: "/",
  },
  {
    title: "likes ❤️",
    href: "/",
  },
];
