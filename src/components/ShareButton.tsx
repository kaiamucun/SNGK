'use client';

interface ShareButtonProps {
  shareText: string;
  warlordName: string;
}

export default function ShareButton({ shareText, warlordName }: ShareButtonProps) {
  function handleXShare() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
  }

  async function handleCopy() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const copyText = `${shareText}\n${url}`;
    try {
      await navigator.clipboard.writeText(copyText);
      alert('コピーしました！');
    } catch {
      // フォールバック
      const el = document.createElement('textarea');
      el.value = copyText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('コピーしました！');
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
      {/* X (Twitter) シェアボタン */}
      <button
        onClick={handleXShare}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:opacity-90"
        style={{
          background: '#000000',
          color: '#ffffff',
          border: '1px solid #333',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        X（Twitter）でシェア
      </button>

      {/* コピーボタン */}
      <button
        onClick={handleCopy}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105"
        style={{
          background: 'transparent',
          color: '#d4a017',
          border: '1px solid rgba(212,160,23,0.5)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        テキストをコピー
      </button>
    </div>
  );
}
