import { SocialIconName } from "@/components/svg-icons/SvgIcons";

export interface ISingleArticle {
  id: number;
  article: string;
  excerpt: string;
  published_time: string;
  slug: string;
  images: {
    id: number;
    image: string;
  }[];
}

export interface IArticles {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISingleArticle[];
}

export interface ISingleArticleDetails {
  id: number;
  published_time: string;
  created_by: {
    id: string;
    full_name: string;
    job_title: string;
  };
  updated_by: {
    id: string;
    full_name: string;
  };
  tags: {
    id: number;
    name: string;
  }[];
  categories: {
    id: number;
    name: string;
  }[];
  images: {
    id: number;
    image: string;
  }[];

  article: string;
  content: string;
  status: string;
  previous_status: null | string;
  excerpt: string;
  template: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export type SocialLinkType = {
  iconName: SocialIconName;
  url: string;
};

export interface ITabs {
  id: number;
  name: string;
  slug: string;
}
