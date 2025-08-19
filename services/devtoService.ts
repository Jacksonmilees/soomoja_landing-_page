
import { DevToArticle } from '../types';

const API_URL = 'https://dev.to/api/articles?username=soomoja';

export const getArticles = async (): Promise<DevToArticle[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch articles from Dev.to');
    }
    const data: DevToArticle[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
