INSERT INTO public.notes (
    title,
    content,
    public,
    slug,
    emoji,
    created_at
) VALUES (
    'Thank You Alana!',
    'Thank you for taking the time to meet with me today. Your insights and guidance were incredibly valuable.',
    true, -- making it public
    'thank-you-alana',
    '🙏',
    CURRENT_TIMESTAMP
);