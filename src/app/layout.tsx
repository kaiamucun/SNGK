import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://sngkpoker.vercel.app';

export const metadata: Metadata = {
  title: '戦国ポーカー武将診断 | 戦国ポーカーツアー',
  description:
    'あなたのポーカースタイルは戦国時代のどの武将？10の質問に答えて、あなたの戦国武将タイプを診断しよう！',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: '戦国ポーカー武将診断 | 戦国ポーカーツアー',
    description: 'あなたのポーカースタイルは戦国時代のどの武将？10の質問に答えて診断しよう！',
    url: siteUrl,
    siteName: '戦国ポーカーツアー',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '戦国ポーカー武将診断 | 戦国ポーカーツアー',
    description: 'あなたのポーカースタイルは戦国時代のどの武将？10の質問に答えて診断しよう！',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="antialiased min-h-screen"
        style={{
          color: '#f0e6d0',
          backgroundImage: 'url(/images/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: '#0a0f1e',
        }}
      >
        <div
          className="min-h-screen"
          style={{ background: 'rgba(5, 8, 20, 0.75)' }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
