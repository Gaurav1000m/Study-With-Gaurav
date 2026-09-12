export type CategoryId = string;

export interface Category {
  id: CategoryId;
  name: string;
  shortName?: string;
  iconName?: string;
  logo?: string;
  description: string;
  count?: number;
  featured?: boolean;
}

export interface WebsiteFaq {
  question: string;
  answer: string;
}

export interface Website {
  id: string;
  name: string;
  url: string;
  logo?: string;
  description: string;
  category: CategoryId;
  subcategory?: string;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  isOfficial?: boolean;
  isNew?: boolean;
  dateAdded: string; // YYYY-MM-DD
  rating?: number;
  
  // Editorial and Educational Guidance Fields
  longDescription?: string;
  targetAudience?: string;
  academicLevel?: string;
  keyFeatures?: string[];
  benefits?: string[];
  prerequisites?: string;
  howToUse?: string[];
  recommendedStartingPoint?: string;
  advantages?: string[];
  limitations?: string[];
  faqs?: WebsiteFaq[];
  lastReviewed?: string;
}

export type SortOption = "recommended" | "popular" | "recent" | "a-z";

export interface FilterOptions {
  category: CategoryId | "all";
  search: string;
  sort: SortOption;
  tag?: string;
}

export interface SuggestionFormData {
  websiteName: string;
  url: string;
  category: CategoryId;
  description: string;
  reason: string;
  suggestedBy?: string;
}
