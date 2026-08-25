import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buildfolio — Engineering Project Creator',
  description: 'Turn first-year engineering modules into practical, CV-worthy projects with a tailored build plan.',
  metadataBase: new URL('https://buildfolio.openai.site'),
  openGraph: { title: 'Buildfolio — Build something worth talking about', description: 'Project ideas, build plans and CV-ready stories for first-year engineers.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Buildfolio', description: 'A project idea generator for first-year engineers.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
