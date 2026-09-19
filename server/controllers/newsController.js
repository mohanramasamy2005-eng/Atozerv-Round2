import News from "../models/News.js";
import { mockNews } from "../data/mockNews.js";

const source = () =>
  process.env.MONGODB_URI ? News.find().lean() : Promise.resolve(mockNews);
const getAll = async () => source();

export const listNews = async (req, res, next) => {
  try {
    let articles = await getAll();
    if (req.query.category)
      articles = articles.filter(
        (item) => item.category === req.query.category,
      );
    res.json(articles);
  } catch (error) {
    next(error);
  }
};
export const getNews = async (req, res, next) => {
  try {
    const articles = await getAll();
    const article = articles.find(
      (item) =>
        String(item._id || item.id) === req.params.id ||
        item.id === req.params.id,
    );
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (error) {
    next(error);
  }
};
export const latestNews = async (req, res, next) => {
  try {
    const articles = await getAll();
    res.json(articles.slice(0, 10));
  } catch (error) {
    next(error);
  }
};
export const searchNews = async (req, res, next) => {
  try {
    const query = String(req.query.q || "").toLowerCase();
    const articles = await getAll();
    res.json(
      articles.filter((item) =>
        `${item.title} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(query),
      ),
    );
  } catch (error) {
    next(error);
  }
};
