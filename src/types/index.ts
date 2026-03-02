export type WarlordId =
  | 'tokugawa'
  | 'saito'
  | 'akechi'
  | 'honda'
  | 'oda'
  | 'shibata'
  | 'maeda'
  | 'toyotomi'
  | 'imagawa'
  | 'tachibana'
  | 'uesugi'
  | 'kuroda'
  | 'takeda'
  | 'date'
  | 'sanada'
  | 'mori';

export type CategoryId = 'tight' | 'loose' | 'exploit' | 'gto';

export interface Warlord {
  id: WarlordId;
  name: string;
  title: string;
  style: string;
  description: string;
  category: CategoryId;
  categoryLabel: string;
  traits: string[];
  imagePath: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  scores: Partial<Record<WarlordId, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}
