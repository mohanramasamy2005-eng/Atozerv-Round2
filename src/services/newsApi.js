import axios from "axios";
import { getCategoryNews, news } from "../data/news";

const wait = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), 180));
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchNews = async ({ category, query } = {}) => {
  if (apiUrl) {
    const endpoint = query
      ? "/news/search"
      : category
        ? `/news/category/${category}`
        : "/news";
    const response = await axios.get(`${apiUrl}${endpoint}`, {
      params: query ? { q: query } : undefined,
    });
    return response.data;
  }
  const filtered = category ? getCategoryNews(category) : news;
  const searched = query
    ? filtered.filter((article) =>
        `${article.title} ${article.description} ${article.category}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      )
    : filtered;
  return wait(searched);
};

export const fetchArticle = async (id) => {
  if (apiUrl) return (await axios.get(`${apiUrl}/news/${id}`)).data;
  return wait(news.find((article) => article.id === id));
};
