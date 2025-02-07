import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ranglista | Lassan!',
  description: 'Nézd meg a legjobb játékosok ranglistáját.',
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 