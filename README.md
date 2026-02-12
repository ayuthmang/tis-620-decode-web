## TIS-620 Decode Web

Online TIS-620 decode and encode.

### Project Story

When I was young, I wrote a diary in Notepad on Windows XP. Most of the characters were in Thai.

Recently, I had a chance to recover my old external hard drive and found that file.
I was unable to read those characters. I researched online and discovered it was an encoding issue.

To give a concrete picture, here is an eample:

TIS-620 input: "ÊÇÑÊ´Õ¤ÃÑº"
UTF-8 output: "สวัสดีครับ"

The issue is that the old Notepad saved my Thai characters with TIS-620 encoding, but modern Notepad read files using UTF-8 by default.

I created this project to help myself migrate that diary content to modern UTF-8.

## Technology Stack

- Next.js
- Radix UI
- Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
