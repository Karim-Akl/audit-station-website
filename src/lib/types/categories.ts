export interface IChildrenCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface IChildrenCategories {
  count: number;
  next: string | null;
  previous: string | null;
  results: IChildrenCategory[];
}
