import { IArticles, ISingleArticleDetails } from "../types/blogs";
import { ICategories, IServices } from "../types/services";

export const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

// export const getBranches = async (): Promise<TBranches> => {
//   const response = await fetch(`${BASE_URL}/ecommerce/branches/?page=1`);
//   const res = await response.json();
//   return res;
// };

// export const getBranchById = async (id: number | null): Promise<TBranch> => {
//   if (id) {
//     const response = await fetch(`${BASE_URL}/ecommerce/branch/${id}/`);
//     const res = await response.json();
//     return res;
//   } else {
//     throw new Error(
//       JSON.stringify("Can't retrieve branch location from order")
//     );
//   }
// };

export const getCategories = async (): Promise<ICategories[]> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/categories-list-one-depth/`
  );
  const res = await response.json();
  return res;
};

export const getServices = async (
  category: string,
  page: number,
  search?: string
): Promise<IServices> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/services/?page=${page}&status=published&categories=${category}&search=${
      search ? search : ""
    }`
  );
  const res = await response.json();
  return res;
};

export const getAllArticles = async (page: number): Promise<IArticles> => {
  const response = await fetch(
    `${BASE_URL}/avitan/articles/?status=published&page=${page}`
  );
  const res = await response.json();
  return res;
};

export const getLatestArticles = async (): Promise<IArticles> => {
  const response = await fetch(`${BASE_URL}/avitan/latest-articles/`);
  const res = await response.json();
  return res;
};

export const getArticleBySlug = async (
  slug: string
): Promise<ISingleArticleDetails> => {
  const response = await fetch(`${BASE_URL}/avitan/articles/${slug}/`);
  const res = await response.json();
  return res;
};
