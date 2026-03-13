import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 pb-[calc(4rem+env(safe-area-inset-bottom))] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* ロゴ/タイトル */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/sengoku-logo.png"
            alt="戦国ポーカーツアー"
            width={480}
            height={240}
            className="w-full max-w-sm sm:max-w-md object-contain"
            priority
          />
        </div>

        <div className="kamon-divider w-48 mx-auto mb-8" />

        <p className="text-lg mb-2" style={{ color: '#c8b88a' }}>
          あなたのポーカースタイルは、
        </p>
        <p className="text-lg mb-8" style={{ color: '#c8b88a' }}>
          戦国時代のどの武将に近い？
        </p>

        <p className="text-sm mb-8" style={{ color: '#8a7a5a' }}>
          10の質問に答えて、あなたの戦国武将タイプを診断しよう
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
          <Link
            href="/quiz"
            className="inline-block px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f5c842)',
              color: '#0a0f1e',
              boxShadow: '0 4px 20px rgba(212, 160, 23, 0.3)',
            }}
          >
            診断スタート ▶
          </Link>
        </div>

        <p className="mb-10 text-xs" style={{ color: '#8a7a5a' }}>
          全16種の戦国武将から診断
        </p>

        {/* カテゴリ紹介 */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-left">
          {[
            { label: 'タイト系', desc: '堅実・忍耐型', img: '/images/warlords/tokugawa.png', name: '徳川家康', color: 'border-blue-500/40', href: '/list#tight' },
            { label: 'ルーズ系', desc: '攻撃・変則型', img: '/images/warlords/oda.png', name: '織田信長', color: 'border-red-500/40', href: '/list#loose' },
            { label: 'エクスプロイト系', desc: '心理・策略型', img: '/images/warlords/uesugi.png', name: '上杉謙信', color: 'border-purple-500/40', href: '/list#exploit' },
            { label: 'GTO系', desc: 'バランス・数学型', img: '/images/warlords/takeda.png', name: '武田信玄', color: 'border-amber-500/40', href: '/list#gto' },
          ].map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`rounded-lg p-3 border ${cat.color} flex items-center gap-3 transition-all duration-200 hover:opacity-80 hover:scale-[1.02]`}
              style={{ background: 'rgba(26,41,66,0.5)' }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden relative">
                <Image src={cat.img} alt={cat.name} fill className="object-cover object-top" />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: '#f0e6d0' }}>{cat.label}</div>
                <div className="text-xs" style={{ color: '#8a7a5a' }}>{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/list"
          className="inline-block px-8 py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-105"
          style={{
            background: 'transparent',
            color: '#d4a017',
            border: '1px solid #d4a017',
          }}
        >
          武将一覧を見る
        </Link>
      </div>
    </main>
  );
}
