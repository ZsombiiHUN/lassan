import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Letöltés | Lassan!',
  description: 'Töltsd le a Lassan! játékot Windows vagy Linux rendszerre.',
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 