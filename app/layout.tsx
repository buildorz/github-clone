import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Copilot · Your AI pair programmer · GitHub",
  description:
    "GitHub Copilot works alongside you directly in your editor, suggesting whole lines or entire functions for you.",
  keywords:
    "GitHub Copilot, AI programming, code completion, developer tools, pair programming",
  authors: [{ name: "GitHub" }],
  openGraph: {
    title: "GitHub Copilot · Your AI pair programmer",
    description:
      "GitHub Copilot works alongside you directly in your editor, suggesting whole lines or entire functions for you.",
    type: "website",
    url: "https://github.com/features/copilot",
    images: [
      {
        url: "https:https://images.ctfassets.net/8aevphvgewt8/5IdZ8KizWhMOGixAmVSw0g/f81f5f263a88eabe5d3e102300d44a88/github-copilot-social-img.png",
        width: 1200,
        height: 630,
        alt: "GitHub Copilot works alongside you directly in your editor, suggesting whole lines or entire functions for you.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Copilot · Your AI pair programmer",
    description:
      "GitHub Copilot works alongside you directly in your editor, suggesting whole lines or entire functions for you.",
    images: [
      "https:https://images.ctfassets.net/8aevphvgewt8/5IdZ8KizWhMOGixAmVSw0g/f81f5f263a88eabe5d3e102300d44a88/github-copilot-social-img.png",
    ],
  },
  themeColor: "#1e2327",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-color-mode="dark" data-dark-theme="dark">
      <head>
        <link
          rel="preload"
          href="https://github.githubassets.com/assets/mona-sans-d1bf285e9b9b.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Mona Sans';
              src: url('https://github.githubassets.com/assets/mona-sans-d1bf285e9b9b.woff2') format('woff2');
              font-weight: 200 900;
              font-stretch: 75% 125%;
              font-display: swap;
            }
          `,
          }}
        />
      </head>
      <body className="antialiased font-['Mona_Sans'] md:px-6 bg-black">
        {children}
      </body>
    </html>
  );
}
