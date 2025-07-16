export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
  date: string;
  likes: number;
  shares: number;
  tags: string[];
  authorBio: string;
  authorAvatar: string;
  slug: string; // For URL routing
  content?: string; // Added for ArticlePage compatibility
}

// types/article.ts
export interface ArticleI {
  id: number;
  category: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  image: string;
  earningMethods: string[];
  seoKeywords?: string[];
  slug: string; // For URL routing
  content?: string; // Added for ArticlePage compatibility


}

export interface DynamiccardI {
  title: string;
  description: string;
  author: string;
  image: string;
  earningMethods: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  likes: number;
  shares: number;
}

// export interface MethodDetail {
//   title: string;
//   description: string;
//   potential: string;
//   difficulty: string;
//   timeToStart: string;
//   requirements: string[];
// }

// types/article.ts - Optimized complete types
export enum ArticleCategory {
  INVESTING = "INVESTING",
  SIDE_HUSTLE = "SIDE_HUSTLE",
  SAVING = "SAVING", 
  BUDGETING = "BUDGETING",
  DEBT_MANAGEMENT = "DEBT_MANAGEMENT",
  PERSONAL_FINANCE = "PERSONAL_FINANCE",
  TEEN_INCOME = "TEEN_INCOME"
}

export enum DifficultyLevel {
  VERY_EASY = "Very Easy",
  EASY = "Easy", 
  MEDIUM = "Medium",
  HARD = "Hard",
  VERY_HARD = "Very Hard"
}

export interface ArticleStats {
  readonly readTime: string;
  readonly likes: number;
  readonly comments: number;
}

export interface Article2 {
  readonly id: number;
  readonly category: ArticleCategory;
  readonly title: string;
  readonly summary: string;
  readonly author: string;
  readonly date: string;
  readonly stats: ArticleStats;
  readonly image: string;
  readonly slug: string;
  readonly earningMethods: readonly string[];
}

export interface MethodContent {
  readonly introduction: string;
  readonly howItWorks: string;
  readonly gettingStarted: readonly string[];
  readonly pros: readonly string[];
  readonly cons: readonly string[];
  readonly tips: readonly string[];
  readonly commonMistakes: readonly string[];
  readonly resources: readonly string[];
  readonly conclusion: string;
}

export interface MethodDetail2 {
  readonly title: string;
  readonly seoKeywords: readonly string[];
  readonly description: string;
  readonly potential: string;
  readonly difficulty: DifficultyLevel;
  readonly timeToStart: string;
  readonly requirements: readonly string[];
  readonly image: string;
  readonly content: MethodContent;
  readonly relatedMethods: readonly string[];
  readonly category: ArticleCategory;
  readonly slug: string;
}

// Utility types
export type ArticleId = number;
export type MethodName = string;
export type CategoryType = keyof typeof ArticleCategory;