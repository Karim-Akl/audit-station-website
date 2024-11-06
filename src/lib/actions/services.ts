import { IChildrenCategories } from "../types/categories";
import { IServices, ISingleService } from "../types/services";

const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

type CategoryType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  parent_id: number | null;
};

export const getServicesOfChildCategory = async (
  category: string,
  childCategory: string | undefined
): Promise<IServices> => {
  const response = await fetch(
    `${BASE_URL}/avitan/services/${childCategory ? `categoryorchild/${childCategory}` : `category/${category}`}/`
  );
  const res = await response.json();
  return res;
};

export const getChildrenCategories = async (
  slug: string
): Promise<IChildrenCategories> => {
  const response = await fetch(`${BASE_URL}/avitan/category/child/${slug}/`);
  const res = await response.json();
  return res;
};

export const getAllCategories = async (): Promise<CategoryType> => {
  const response = await fetch(`${BASE_URL}/ecommerce/categories/`);
  const res = await response.json();
  return res;
};

export const getServiceBySlug = async (
  slug: string
): Promise<ISingleService> => {
  const response = await fetch(`${BASE_URL}/ecommerce/service/view/${slug}/`);
  const res = await response.json();
  return res;
};
