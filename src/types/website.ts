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
