import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticle, fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import ImageViewer from "../components/ImageViewer";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [related, setRelated] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    fetchArticle(id)
      .then((item) => {
        setArticle(item);
        if (item)
          fetchNews({ category: item.category }).then((items) =>
            setRelated(
              items.filter((relatedItem) => relatedItem.id !== id).slice(0, 2),
            ),
          );
      })
      .catch(() => setError(true));
  }, [id]);
  if (error)
    return (
      <main>
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
      </main>
    );
  if (!article)
    return (
      <main>
        <div className="status">செய்தி ஏற்றப்படுகிறது...</div>
      </main>
    );
  return (
    <main className="article-page">
      <Link className="back-link" to={`/${article.category}`}>
        ← {article.category} பகுதிக்குத் திரும்புக
      </Link>
      <span className="section-kicker">
        {article.tag} / {article.category}
      </span>
      <h1>{article.title}</h1>
      <p className="article-deck">{article.description}</p>
      <div className="article-meta">
        ஆசிரியர்: {article.author} · செய்தி மூலம்: {article.source} ·
        வெளியிடப்பட்ட தேதி: {article.date}
      </div>
      <button className="article-image" onClick={() => setSelected(article)}>
        <img src={article.image} alt="" />
      </button>
      <div className="article-content">
        <p>{article.content}</p>
        <p>
          ஒவ்வொரு முடிவும் ஒரு கதையின் ஒரு பகுதி மட்டுமே. அதன் பின்னால்
          இருக்கும் உழைப்பு, பொறுமை மற்றும் முடிவுகள்தான் விளையாட்டை தொடர்ந்து
          கவனிக்கச் செய்கின்றன. அந்த நுணுக்கங்களை உங்களிடம் தொடர்ந்து கொண்டு
          வருகிறோம்.
        </p>
      </div>
      <h2 className="related-title">{article.category} தொடர்புடைய செய்திகள்</h2>
      <div className="news-grid">
        {related.map((item) => (
          <NewsCard key={item.id} article={item} onImageClick={setSelected} />
        ))}
      </div>
      {selected && (
        <ImageViewer article={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
