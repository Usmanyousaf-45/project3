// app/layout.tsx
import './globals.css' // important

export const metadata = {
  title: 'My Simple Next.js Site',
  description: 'A simple site built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
