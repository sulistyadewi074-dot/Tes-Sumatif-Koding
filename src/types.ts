/**
 * Definisi Type & Interface Aplikasi Tes Sumatif
 */

export type QuestionType = 'pg' | 'pgk' | 'pgk_kategori' | 'isian';
export type Difficulty = 'Mudah' | 'Sedang' | 'Sukar';
export type CategoryChoiceType = 'benar_salah' | 'setuju_tidak_setuju' | 'sesuai_tidak_sesuai';

export interface StudentBirthDate {
  hari: string;
  bulan: string;
  tahun: string;
}

export interface StudentIdentity {
  nama: string;
  noAbsen: string;
  tglLahir?: StudentBirthDate;
}

export interface OptionItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export interface StatementItem {
  id: string; // e.g. 's1', 's2', 's3'
  text: string;
  correctAnswer: boolean; // true / false
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  imageSvg?: string; // Format SVG visual untuk representasi diagram alir / grid koding
  options?: OptionItem[]; // Untuk 'pg' (4 opsi) dan 'pgk' (4 opsi)
  statements?: StatementItem[]; // Untuk 'pgk_kategori' (3 pernyataan)
  categoryType?: CategoryChoiceType; // 'benar_salah' | 'setuju_tidak_setuju' | 'sesuai_tidak_sesuai'
  correctAnswer?: string | string[]; // string untuk 'pg' dan 'isian', array string untuk 'pgk'
  acceptableAnswers?: string[]; // Variasi kata kunci yang diterima untuk tipe 'isian' (case-insensitive)
  difficulty: Difficulty;
  explanation: string;
  topic: string;
}

export interface ShuffledQuestion extends Question {
  originalQuestionId: number;
  shuffledOptions?: OptionItem[];
}

export type AnswerValue = string | string[] | Record<string, boolean>;

export interface ExamResult {
  id?: string;
  timestamp: string;
  nama: string;
  noAbsen: string;
  kelas: string;
  tglLahir?: string;
  benar: number;
  salah: number;
  nilai: number;
  status: 'Lulus' | 'Belum Lulus';
  detailJawaban?: Record<number, AnswerValue>;
}

export type AppStage = 1 | 2 | 3 | 4;
