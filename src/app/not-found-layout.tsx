import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Az oldal nem található | Lassan!',
  description: 'Sajnáljuk, a keresett oldal nem található vagy már nem létezik.',
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 