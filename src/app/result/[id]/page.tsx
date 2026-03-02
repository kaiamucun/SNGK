import Link from 'next/link';
import { notFound } from 'next/navigation';
import { warlords, categories } from '@/data/warlords';
import { WarlordId } from '@/types';
import ShareButton from '@/components/ShareButton';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const warlord = warlords[id as WarlordId];
  if (!warlord) return {};
  return {
    title: `あなたは「${warlord.name}」タイプ | 戦国ポーカー武将診断`,
    description: warlord.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(warlords).map((id) => ({ id }));
}

export default async function ResultPage({ params }: Props) {
  const { id } = await params;
  const warlord = warlords[id as WarlordId];

  if (!warlord) {
    notFound();
  }

  const category = categories.find((c) => c.id === warlord.category);
  const sameCategory = Object.values(warlords).filter(
    (w) => w.category === warlord.category && w.id !== warlord.id
  );

  const shareText = `私の戦国ポーカー武将診断結果は「${warlord.name}（${warlord.title}）」でした！\nポーカースタイル：${warlord.style}\n\nあなたも診断してみよう！\n#戦国ポーカーツアー #ポーカー #戦国武将診断`;

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-6">
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#d4a017' }}>
            診断結果
          </p>
          <p className="text-sm" style={{ color: '#8a7a5a' }}>
            あなたの戦国ポーカータイプは...
          </p>
        </div>

        {/* メイン結果カード */}
        <div
          className="rounded-xl overflow-hidden mb-6 result-glow"
          style={{
            background: 'linear-gradient(135deg, rgba(26,41,66,0.98), rgba(10,15,30,1))',
            border: '1px solid rgba(212,160,23,0.6)',
          }}
        >
          {/* カテゴリバナー */}
          <div
            className={`px-6 py-2 text-center text-xs font-bold tracking-widest`}
            style={{
              background:
                warlord.category === 'tight'
                  ? 'rgba(59,130,246,0.3)'
                  : warlord.category === 'loose'
                  ? 'rgba(239,68,68,0.3)'
                  : warlord.category === 'exploit'
                  ? 'rgba(168,85,247,0.3)'
                  : 'rgba(245,158,11,0.3)',
              color:
                warlord.category === 'tight'
                  ? '#93c5fd'
                  : warlord.category === 'loose'
                  ? '#fca5a5'
                  : warlord.category === 'exploit'
                  ? '#d8b4fe'
                  : '#fcd34d',
            }}
          >
            {category?.label} — {category?.subtitle}
          </div>

          {/* 武将画像エリア（画像追加後は imagePath に差し替え） */}
          <div
            className="w-full h-48 sm:h-64 flex items-center justify-center"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(26,41,66,0.8))' }}
          >
            <span className="text-8xl opacity-40">⚔️</span>
          </div>

          <div className="p-6 sm:p-8">
            {/* 武将名 */}
            <div className="text-center mb-6">
              <p className="text-sm mb-1" style={{ color: '#d4a017' }}>
                {warlord.title}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#f0e6d0' }}>
                {warlord.name}
              </h1>
              <p className="text-base font-semibold" style={{ color: '#c8b88a' }}>
                {warlord.style}
              </p>
            </div>

            <div className="kamon-divider mb-6" />

            {/* 特徴タグ */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {warlord.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: 'rgba(212,160,23,0.15)',
                    color: '#d4a017',
                    border: '1px solid rgba(212,160,23,0.4)',
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* 説明文 */}
            <p className="text-sm sm:text-base leading-relaxed text-center" style={{ color: '#c8b88a' }}>
              {warlord.description}
            </p>
          </div>
        </div>

        {/* シェアボタン */}
        <div className="mb-6">
          <p className="text-center text-sm mb-3" style={{ color: '#8a7a5a' }}>
            診断結果をシェアしよう
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ShareButton shareText={shareText} warlordName={warlord.name} />
          </div>
        </div>

        {/* 同カテゴリの武将 */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{
            background: 'rgba(26,41,66,0.5)',
            border: '1px solid rgba(212,160,23,0.2)',
          }}
        >
          <h3 className="text-sm font-bold mb-4 text-center" style={{ color: '#d4a017' }}>
            同じ{category?.label}の武将
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {sameCategory.map((w) => (
              <Link
                key={w.id}
                href={`/result/${w.id}`}
                className="text-center rounded-lg p-3 transition-all hover:opacity-80"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(212,160,23,0.2)',
                }}
              >
                <div className="text-2xl mb-1">⚔️</div>
                <p className="text-xs font-bold" style={{ color: '#f0e6d0' }}>
                  {w.name}
                </p>
                <p className="text-xs mt-1" style={{ color: '#8a7a5a' }}>
                  {w.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* アクションボタン */}
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
      </div>
    </main>
  );
}
