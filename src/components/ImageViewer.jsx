import { useEffect } from "react";

export default function ImageViewer({ article, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="செய்திப் படக் காட்சி"
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="படக் காட்சியை மூடவும்"
      >
        ×
      </button>
      <figure onClick={(event) => event.stopPropagation()}>
        <img src={article.image} alt={article.title} />
        <figcaption>{article.title}</figcaption>
      </figure>
    </div>
  );
}
