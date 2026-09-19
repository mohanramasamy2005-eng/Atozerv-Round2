import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import ImageViewer from "../components/ImageViewer";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    fetchNews({ query })
      .then(setResults)
      .catch(() => setError(true));
  }, [query]);
  return (
    <main>
      <div className="category-heading">
        <span className="section-kicker">தேடல் முடிவுகள்</span>
        <h1>“{query}”</h1>
        <p>
          விளையாட்டு செய்திகள் காப்பகத்தில் {results.length} செய்திகள்
          கிடைத்துள்ளன.
        </p>
      </div>
      {error ? (
        <div className="status">
          செய்திகளை ஏற்றுவதில் சிக்கல் ஏற்பட்டுள்ளது.
          <br />
          <button
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            மீண்டும் முயற்சிக்கவும்
          </button>
        </div>
      ) : (
        <div className="news-grid">
          {results.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onImageClick={setSelected}
            />
          ))}
        </div>
      )}
      {!error && !results.length && (
        <div className="status">
          தேடலுக்கான செய்திகள் எதுவும் கிடைக்கவில்லை.
        </div>
      )}
      {selected && (
        <ImageViewer article={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
