import { Link } from "react-router-dom";

export default function NewsCard({ article, onImageClick, feature = false }) {
  return (
    <article className={`news-card ${feature ? "news-card--feature" : ""}`}>
      <button
        className="image-button"
        onClick={() => onImageClick(article)}
        aria-label={`${article.title} செய்திப் படத்தைப் பார்க்கவும்`}
      >
        <img src={article.image} alt="" />
      </button>
      <div className="card-copy">
        <span className="eyebrow">
          {article.tag} / {article.date}
        </span>
        <h2>
          <Link to={`/news/${article.id}`}>{article.title}</Link>
        </h2>
        <p>{article.description}</p>
        <span className="byline">
          ஆசிரியர்: {article.author} · செய்தி மூலம்: {article.source}
        </span>
      </div>
    </article>
  );
}
