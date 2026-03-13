'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ResultHeader() {
  const searchParams = useSearchParams();
  const isInfoMode = searchParams.get('mode') === 'info';

  if (isInfoMode) {
    return (
      <div className="text-center mb-6">
        <Link href="/list" className="text-sm hover:opacity-80 block mb-4" style={{ color: '#8a7a5a' }}>
          ← 一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center mb-6">
      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#d4a017' }}>
        診断結果
      </p>
      <p className="text-sm" style={{ color: '#8a7a5a' }}>
        あなたの戦国ポーカータイプは...
      </p>
    </div>
  );
}
