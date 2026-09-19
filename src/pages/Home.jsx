import { useState } from "react";
import { Link } from "react-router-dom";
import { news } from "../data/news";
import NewsCard from "../components/NewsCard";
import ImageViewer from "../components/ImageViewer";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [lead, ...secondary] = news;
  return (
    <>
      <main>
        <div className="breaking">
          <strong>முக்கிய செய்திகள்</strong>
          <span>
            விளையாட்டு உலகின் கவனம் திருப்புமுனைகள் நிறைந்த வார இறுதியை நோக்கி
            திரும்புகிறது
          </span>
          <span>●</span>
          <span>
            ஒவ்வொரு முடிவையும் விளையாட்டு செய்திகளுடன் அறிந்துகொள்ளுங்கள்
          </span>
        </div>
        <section className="intro">
          <span className="section-kicker">சனிக்கிழமை நாளிதழ்</span>
          <h1>
            சத்தமில்லா <em>விளையாட்டு</em> செய்தி.
          </h1>
          <p className="intro-copy">
            முடிவுகளுக்குப் பின்னால் இருக்கும் கதைகள், விளையாட்டை முன்னெடுக்கும்
            மனிதர்கள் மற்றும் நம்முடன் நிலைத்து நிற்கும் தருணங்கள்.
          </p>
        </section>
        <section className="lead-grid">
          <NewsCard article={lead} feature onImageClick={setSelected} />
          <div className="side-stories">
            {secondary.slice(0, 2).map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onImageClick={setSelected}
              />
            ))}
          </div>
        </section>
        <section className="latest-heading">
          <span className="section-kicker">நாளிதழின் முக்கிய செய்திகள்</span>
          <h2>
            சமீபத்திய செய்திகள் <Link to="/cricket">அனைத்தையும் பார்க்க →</Link>
          </h2>
        </section>
        <div className="news-grid">
          {secondary.slice(2).map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onImageClick={setSelected}
            />
          ))}
        </div>
      </main>
      {selected && (
        <ImageViewer article={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
