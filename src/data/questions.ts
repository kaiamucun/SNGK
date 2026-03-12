import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'ポーカーで参加するハンドを選ぶ基準は？',
    options: [
      {
        id: 'a',
        text: 'AA・KKなどプレミアムハンドのみ。確実に強い手しか使わない',
        scores: { tokugawa: 2, honda: 2, akechi: 1, saito: 1 },
      },
      {
        id: 'b',
        text: 'ポジションが良ければスーテッドコネクターや中ペアでも積極的に参加',
        scores: { oda: 2, maeda: 2, shibata: 1 },
      },
      {
        id: 'c',
        text: '相手のレベルや行動パターンを見て参加範囲を変える',
        scores: { imagawa: 2, kuroda: 1, mori: 1, uesugi: 1 },
      },
      {
        id: 'd',
        text: '期待値がプラスになるハンドなら参加する',
        scores: { takeda: 2, tachibana: 1, date: 1, sanada: 1 },
      },
    ],
  },
  {
    id: 2,
    text: 'フロップで強いハンド（セット・フラッシュ等）を持った時、どう打ちますか？',
    options: [
      {
        id: 'a',
        text: 'すぐにベットして確実にバリューを取りに行く',
        scores: { tachibana: 2, shibata: 1, oda: 1, uesugi: 1 },
      },
      {
        id: 'b',
        text: 'チェックして相手にブラフさせ、後でチェックレイズで奪う',
        scores: { saito: 2, kuroda: 2, mori: 1 },
      },
      {
        id: 'c',
        text: 'ポット・オッズを計算して数学的に最適なベット額を選ぶ',
        scores: { takeda: 2, honda: 1, date: 1 },
      },
      {
        id: 'd',
        text: '相手の心理状態を読んで、最も効果的なアクションを選ぶ',
        scores: { mori: 2, kuroda: 1, akechi: 1, saito: 1 },
      },
    ],
  },
  {
    id: 3,
    text: 'ブラフに対するあなたのスタンスは？',
    options: [
      {
        id: 'a',
        text: 'ほぼしない。本当に強いハンドの時だけベットする',
        scores: { honda: 2, tokugawa: 1, tachibana: 1 },
      },
      {
        id: 'b',
        text: '完璧な状況を狙い、ここぞという時に大きなブラフを一発',
        scores: { akechi: 2, uesugi: 1, sanada: 1 },
      },
      {
        id: 'c',
        text: '頻繁に小さなブラフを混ぜてレンジをバランスさせる',
        scores: { takeda: 2, oda: 1, date: 1 },
      },
      {
        id: 'd',
        text: '相手が「ブラフだ」と思う瞬間に本物を出す。読みを逆手に取る',
        scores: { saito: 2, kuroda: 2, akechi: 1 },
      },
    ],
  },
  {
    id: 4,
    text: 'ベットの規模感は？',
    options: [
      {
        id: 'a',
        text: '小さく多く入り、じわじわと相手のチップを削り取る',
        scores: { toyotomi: 2, tokugawa: 1, mori: 1 },
      },
      {
        id: 'b',
        text: '全ストリートで大きくベットして常に相手を追い詰める',
        scores: { shibata: 2, uesugi: 1, oda: 1 },
      },
      {
        id: 'c',
        text: 'ハンドの強さに応じて大小を使い分けてバランスを取る',
        scores: { takeda: 2, tokugawa: 1, date: 1 },
      },
      {
        id: 'd',
        text: '相手がコールできないギリギリの額を計算して打つ',
        scores: { uesugi: 2, akechi: 1, tachibana: 1 },
      },
    ],
  },
  {
    id: 5,
    text: 'テーブル内で自分や相手プレイヤーについて最も重視する情報は？',
    options: [
      {
        id: 'a',
        text: 'ハンドの数学的な強さと確率・オッズ',
        scores: { takeda: 2, honda: 1, tachibana: 1 },
      },
      {
        id: 'b',
        text: '自分のポジション',
        scores: { date: 2, oda: 1, tokugawa: 1 },
      },
      {
        id: 'c',
        text: '相手の行動パターン・クセ・ベット傾向',
        scores: { imagawa: 2, saito: 1, kuroda: 1 },
      },
      {
        id: 'd',
        text: 'テーブル全体の流れ、誰がチルト（感情的）しているか',
        scores: { mori: 2, kuroda: 1, toyotomi: 1 },
      },
    ],
  },
  {
    id: 6,
    text: 'チップが大幅に減って大ピンチ、あなたならどう行動しますか？',
    options: [
      {
        id: 'a',
        text: 'さらに絞ってタイトに。確実な手だけを待つ',
        scores: { honda: 2, tokugawa: 2, takeda: 1 },
      },
      {
        id: 'b',
        text: '一か八かのオールインで一気に逆転を狙う',
        scores: { sanada: 2, uesugi: 1, maeda: 1 },
      },
      {
        id: 'c',
        text: '相手の弱い部分を特定して効率よくチップを取り返す',
        scores: { imagawa: 1, kuroda: 2, akechi: 1 },
      },
      {
        id: 'd',
        text: '数学的に最適なタイミングを計算してオールイン',
        scores: { sanada: 1, takeda: 1, date: 2 },
      },
    ],
  },
  {
    id: 7,
    text: '相手のミスをどのように活かしますか？',
    options: [
      {
        id: 'a',
        text: '丁寧に1つ1つ積み重ね、じっくりとチップを増やす',
        scores: { tokugawa: 2, toyotomi: 2, mori: 1 },
      },
      {
        id: 'b',
        text: 'ミスをした相手を一気に畳み掛けて仕留める',
        scores: { shibata: 2, oda: 1, tachibana: 1 },
      },
      {
        id: 'c',
        text: '相手がミスしやすい状況を意図的に作り出してトラップを張る',
        scores: { saito: 2, kuroda: 2, akechi: 1 },
      },
      {
        id: 'd',
        text: 'ミスをするタイプの相手を事前に見極めてターゲットにする',
        scores: { imagawa: 2, mori: 1, uesugi: 1 },
      },
    ],
  },
  {
    id: 8,
    text: 'ポーカーでの最終的な理想な勝利は？',
    options: [
      {
        id: 'a',
        text: '最後まで生き残り、全員が疲れた頃に確実な優勝を手にする',
        scores: { tokugawa: 2, honda: 1, mori: 1 },
      },
      {
        id: 'b',
        text: '誰もが圧倒されるほど強力なプレイで圧勝する',
        scores: { oda: 2, shibata: 1, uesugi: 1 },
      },
      {
        id: 'c',
        text: '相手の盲点を突き、誰も予想しなかった逆転劇を演じる',
        scores: { sanada: 2, maeda: 1, akechi: 1 },
      },
      {
        id: 'd',
        text: '全ての状況を計算し尽くし、完璧なプレイで勝利する',
        scores: { takeda: 2, date: 1, kuroda: 1 },
      },
    ],
  },
  {
    id: 9,
    text: 'ブラインドが上がってスタックが15BB。まだバブルではないあなたの基本方針はどれ？',
    options: [
      {
        id: 'a',
        text: 'プレミアムハンドが来るまでフォールドし続ける',
        scores: { honda: 2, tokugawa: 2, saito: 1 },
      },
      {
        id: 'b',
        text: 'プッシュ/フォールドチャートに従ってプレイする',
        scores: { takeda: 2, date: 2, tachibana: 1 },
      },
      {
        id: 'c',
        text: 'ポジションとスタックを見て積極的にスチールを狙う',
        scores: { oda: 2, date: 1, sanada: 1, kuroda: 1 },
      },
      {
        id: 'd',
        text: '全部オールイン！死ぬか生きるか！',
        scores: { sanada: 2, maeda: 2, shibata: 1 },
      },
    ],
  },
  {
    id: 10,
    text: '入賞までもう少し、残り30BBでUTGでJJが配られた。オープンしたらチップリーダーから3BETが…あなたならどうする？',
    options: [
      {
        id: 'a',
        text: '入賞したいのでフォールド',
        scores: { honda: 2, tokugawa: 2, saito: 1 },
      },
      {
        id: 'b',
        text: '少し悩むが、コールしてフロップを見てチャンスを狙う',
        scores: { imagawa: 2, mori: 1, toyotomi: 1 },
      },
      {
        id: 'c',
        text: 'チップリーダーのレンジを見てオールインを検討する',
        scores: { kuroda: 2, takeda: 1, date: 1, akechi: 1 },
      },
      {
        id: 'd',
        text: 'とにかくオールインしてダブルアップして優勝あるのみ',
        scores: { sanada: 2, shibata: 1, uesugi: 1, maeda: 1 },
      },
    ],
  },
];

export function calculateResult(answers: string[]): string {
  const scores: Record<string, number> = {};

  answers.forEach((answerId, questionIndex) => {
    const question = questions[questionIndex];
    const option = question.options.find((o) => o.id === answerId);
    if (option) {
      Object.entries(option.scores).forEach(([warlordId, score]) => {
        scores[warlordId] = (scores[warlordId] || 0) + score;
      });
    }
  });

  let maxScore = -1;
  let result = 'tokugawa';

  Object.entries(scores).forEach(([warlordId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      result = warlordId;
    }
  });

  return result;
}
