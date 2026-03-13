import Image from 'next/image';
import Link from 'next/link';
import { warlords, categories } from '@/data/warlords';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '全武将一覧 | 戦国ポーカー武将診断',
  description: '戦国ポーカー診断に登場する全16種の武将一覧。タイト系・ルーズ系・エクスプロイト系・GTO系の4カテゴリを網羅。',
};

export default function ListPage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-10">
          <Link href="/" className="text-sm hover:opacity-80 block mb-4" style={{ color: '#8a7a5a' }}>
            ← トップへ
          </Link>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#d4a017' }}>
            SENGOKU POKER TOUR
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#f0e6d0' }}>
            全武将一覧
          </h1>
          <div className="kamon-divider w-32 mx-auto mt-4" />
        </div>

        {/* カテゴリ別武将一覧 */}
        {categories.map((category) => {
          const categoryWarlords = Object.values(warlords).filter(
            (w) => w.category === category.id
          );

          return (
            <section key={category.id} id={category.id} className="mb-12 scroll-mt-8">
              {/* カテゴリヘッダー */}
              <div
                className="rounded-lg p-4 mb-4"
                style={{
                  background:
                    category.id === 'tight'
                      ? 'rgba(59,130,246,0.15)'
                      : category.id === 'loose'
                      ? 'rgba(239,68,68,0.15)'
                      : category.id === 'exploit'
                      ? 'rgba(168,85,247,0.15)'
                      : 'rgba(245,158,11,0.15)',
                  border: `1px solid ${
                    category.id === 'tight'
                      ? 'rgba(59,130,246,0.4)'
                      : category.id === 'loose'
                      ? 'rgba(239,68,68,0.4)'
                      : category.id === 'exploit'
                      ? 'rgba(168,85,247,0.4)'
                      : 'rgba(245,158,11,0.4)'
                  }`,
                }}
              >
                <h2
                  className="text-xl font-bold mb-1"
                  style={{
                    color:
                      category.id === 'tight'
                        ? '#93c5fd'
                        : category.id === 'loose'
                        ? '#fca5a5'
                        : category.id === 'exploit'
                        ? '#d8b4fe'
                        : '#fcd34d',
                  }}
                >
                  {category.label}
                </h2>
                <p className="text-xs" style={{ color: '#8a7a5a' }}>
                  {category.description}
                </p>
              </div>

              {/* 武将グリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryWarlords.map((warlord) => (
                  <Link
                    key={warlord.id}
                    href={`/result/${warlord.id}`}
                    className="warlord-card rounded-xl p-5 block group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden relative"
                        style={{ background: 'rgba(212,160,23,0.1)' }}
                      >
                        {warlord.imagePath ? (
                          <Image
                            src={warlord.imagePath}
                            alt={warlord.name}
                            fill
                            className="object-cover object-top"
                          />
                        ) : (
                          <span className="w-full h-full flex items-center justify-center text-2xl">⚔️</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs mb-0.5" style={{ color: '#d4a017' }}>
                          {warlord.title}
                        </p>
                        <h3 className="text-lg font-bold mb-0.5" style={{ color: '#f0e6d0' }}>
                          {warlord.name}
                        </h3>
                        <p className="text-xs font-medium mb-2" style={{ color: '#c8b88a' }}>
                          {warlord.style}
                        </p>
                        <p
                          className="text-xs leading-relaxed line-clamp-2"
                          style={{ color: '#8a7a5a' }}
                        >
                          {warlord.description}
                        </p>
                        {/* トレイトタグ */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {warlord.traits.map((trait) => (
                            <span
                              key={trait}
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: 'rgba(212,160,23,0.1)',
                                color: '#d4a017',
                                border: '1px solid rgba(212,160,23,0.3)',
                              }}
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-sm group-hover:translate-x-1 transition-transform" style={{ color: '#d4a017' }}>
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* 診断へのCTA */}
        <div className="text-center mt-8 pb-safe pb-8">
          <p className="text-sm mb-4" style={{ color: '#8a7a5a' }}>
            あなたはどの武将タイプ？
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{
                background: 'rgba(212,160,23,0.15)',
                color: '#d4a017',
                border: '2px solid #d4a017',
              }}
            >
              ◀ トップへ戻る
            </Link>
            <Link
              href="/quiz"
              className="inline-block px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #d4a017, #f5c842)',
                color: '#0a0f1e',
                boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
              }}
            >
              診断スタート ▶
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
