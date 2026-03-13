'use client';

import { useSearchParams } from 'next/navigation';
import ShareButton from './ShareButton';

interface Props {
  shareText: string;
  warlordName: string;
}

export default function ResultShareSection({ shareText, warlordName }: Props) {
  const searchParams = useSearchParams();
  const isInfoMode = searchParams.get('mode') === 'info';

  if (isInfoMode) return null;

  return (
    <div className="mb-6">
      <p className="text-center text-sm mb-3" style={{ color: '#8a7a5a' }}>
        診断結果をシェアしよう
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <ShareButton shareText={shareText} warlordName={warlordName} />
      </div>
    </div>
  );
}
