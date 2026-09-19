import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sports } from "../data/news";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="masthead">
        <button
          className="menu-button"
          aria-label="வழிசெலுத்தலைத் திறக்கவும்"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
        <div className="brand-group">
          <NavLink className="brand" to="/">
            விளையாட்டு <i>செய்திகள்</i>
          </NavLink>
          <p className="brand-description">
            கிரிக்கெட், கால்பந்து மற்றும் அனைத்து விளையாட்டு செய்திகளும் -
            நேரடியாக காணுங்கள்
          </p>
        </div>
        <div className="masthead-actions">
          <a
            className="whatsapp-channel"
            href="https://whatsapp.com/channel/your-channel-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp Channel - இல் இணைந்திருங்கள்"
          >
            <span className="whatsapp-icon">
              <svg
                className="whatsapp-logo"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2a9.8 9.8 0 0 0-8.47 14.73L2.2 21.8l5.2-1.3A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.3-.18-3.08.77.8-3-.2-.31A8 8 0 1 1 12 19.8Zm4.4-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.25-2.83-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6 1.52.66 2.12.72 2.88.6.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </span>
            <span>Whatsapp Channel - இல் இணைந்திருங்கள்</span>
          </a>
        </div>
      </div>
      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        {sports.map((sport) => (
          <NavLink
            key={sport.slug}
            to={`/${sport.slug}`}
            onClick={() => setOpen(false)}
          >
            <span className="nav-emoji" aria-hidden="true">
              {sport.emoji}
            </span>
            {sport.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
