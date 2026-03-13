'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ResultActions() {
  const searchParams = useSearchParams();
  const isInfoMode = searchParams.get('mode') === 'info';

  if (isInfoMode) {
    return (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/list"
          className="px-8 py-3 rounded-lg font-bold text-center transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #d4a017, #f5c842)',
            color: '#0a0f1e',
          }}
        >
          ← 一覧へ戻る
        </Link>
        <Link
          href="/quiz"
          className="px-8 py-3 rounded-lg font-bold text-center transition-all hover:scale-105"
          style={{
            background: 'transparent',
            color: '#d4a017',
            border: '1px solid #d4a017',
          }}
        >
          診断スタート ▶
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Link
        href="/quiz"
        className="px-8 py-3 rounded-lg font-bold text-center transition-all hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #d4a017, #f5c842)',
          color: '#0a0f1e',
        }}
      >
        もう一度診断する
      </Link>
      <Link
        href="/list"
        className="px-8 py-3 rounded-lg font-bold text-center transition-all hover:scale-105"
        style={{
          background: 'transparent',
          color: '#d4a017',
          border: '1px solid #d4a017',
        }}
      >
        全武将一覧を見る
      </Link>
    </div>
  );
}
