import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sports } from "../data/news";
import { fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import ImageViewer from "../components/ImageViewer";

export default function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sport = sports.find((item) => item.slug === category);
  const loadArticles = () => {
    setLoading(true);
    setError(false);
    fetchNews({ category })
      .then(setArticles)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };
  useEffect(loadArticles, [category]);
  if (!sport) return null;
  return (
    <main>
      {loading ? (
        <div className="status">{sport.label} செய்திகள் ஏற்றப்படுகின்றன...</div>
      ) : error ? (
        <div className="status">
          செய்திகளை ஏற்றுவதில் சிக்கல் ஏற்பட்டுள்ளது.
          <br />
          <button className="retry-button" onClick={loadArticles}>
            மீண்டும் முயற்சிக்கவும்
          </button>
        </div>
      ) : (
        <div className="category-grid">
          {articles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              feature={index === 0}
              onImageClick={setSelected}
            />
          ))}
        </div>
      )}
      {selected && (
        <ImageViewer article={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
