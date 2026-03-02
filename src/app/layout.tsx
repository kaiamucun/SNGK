import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '戦国ポーカー武将診断 | 戦国ポーカーツアー',
  description:
    'あなたのポーカースタイルは戦国時代のどの武将？8つの質問に答えて、あなたの戦国武将タイプを診断しよう！',
  openGraph: {
    title: '戦国ポーカー武将診断',
    description: 'あなたのポーカースタイルは戦国時代のどの武将？',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen" style={{ background: '#0a0f1e', color: '#f0e6d0' }}>
        {children}
      </body>
    </html>
  );
}
