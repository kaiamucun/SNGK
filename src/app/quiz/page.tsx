'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { questions, calculateResult } from '@/data/questions';

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(optionId: string) {
    setSelectedOption(optionId);
  }

  function handleNext() {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];

    if (isLast) {
      const resultId = calculateResult(newAnswers);
      router.push(`/result/${resultId}`);
    } else {
      setAnswers(newAnswers);
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  }

  function handleBack() {
    if (currentIndex === 0) {
      router.push('/');
    } else {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(answers[currentIndex - 1]);
      setAnswers(answers.slice(0, currentIndex - 1));
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* ヘッダー */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-center justify-between mb-3">
          <Link href="/" className="text-sm hover:opacity-80" style={{ color: '#8a7a5a' }}>
            ← トップへ
          </Link>
          <span className="text-sm font-bold" style={{ color: '#d4a017' }}>
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        {/* プログレスバー */}
        <div className="w-full h-2 rounded-full" style={{ background: 'rgba(212,160,23,0.2)' }}>
          <div
            className="h-2 rounded-full progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 質問カード */}
      <div
        className="w-full max-w-2xl rounded-xl p-6 sm:p-8 mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(26,41,66,0.95), rgba(10,15,30,0.98))',
          border: '1px solid rgba(212,160,23,0.3)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        }}
      >
        <div className="mb-2">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#d4a017' }}
          >
            Question {currentIndex + 1}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 leading-relaxed" style={{ color: '#f0e6d0' }}>
          {currentQuestion.text}
        </h2>

        <div className="kamon-divider mb-6" />

        {/* 選択肢 */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`option-card w-full text-left rounded-lg px-4 py-4 cursor-pointer ${
                selectedOption === option.id ? 'selected' : ''
              }`}
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mt-0.5"
                  style={{
                    background: selectedOption === option.id
                      ? 'linear-gradient(135deg, #d4a017, #f5c842)'
                      : 'rgba(212,160,23,0.15)',
                    color: selectedOption === option.id ? '#0a0f1e' : '#d4a017',
                    border: '1px solid rgba(212,160,23,0.4)',
                  }}
                >
                  {option.id.toUpperCase()}
                </span>
                <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#e0d0b0' }}>
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ボタン行 */}
      <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={
            selectedOption
              ? {
                  background: 'linear-gradient(135deg, #d4a017, #f5c842)',
                  color: '#0a0f1e',
                  boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
                }
              : {
                  background: 'rgba(212,160,23,0.2)',
                  color: '#6a5a3a',
                  cursor: 'not-allowed',
                }
          }
        >
          {isLast ? '診断結果を見る ▶' : '次の質問へ ▶'}
        </button>

        <button
          onClick={handleBack}
          className="px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200 hover:opacity-80"
          style={{
            background: 'transparent',
            color: '#8a7a5a',
            border: '1px solid rgba(138,122,90,0.4)',
          }}
        >
          ◀ 戻る
        </button>
      </div>

      {/* 質問ドット */}
      <div className="flex gap-2 mt-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background:
                i < currentIndex
                  ? '#d4a017'
                  : i === currentIndex
                  ? '#f5c842'
                  : 'rgba(212,160,23,0.2)',
            }}
          />
        ))}
      </div>
    </main>
  );
}
