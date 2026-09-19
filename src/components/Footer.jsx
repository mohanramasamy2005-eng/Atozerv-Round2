import { Link } from "react-router-dom";
import { sports } from "../data/news";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        விளையாட்டு <i>தினசரி</i>
        <p>
          விளையாட்டு உலகின் முக்கிய செய்திகளை ஒரே இடத்தில் அறிந்துகொள்ளுங்கள்.
        </p>
      </div>
      <div>
        <span className="footer-label">விளையாட்டுகள்</span>
        {sports.map((sport) => (
          <Link key={sport.slug} to={`/${sport.slug}`}>
            {sport.label}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-label">நாளிதழ்</span>
        <a href="#about">எங்களைப் பற்றி</a>
        <a href="#contact">தொடர்பு</a>
        <a href="#terms">தனியுரிமைக் கொள்கை</a>
        <a href="#terms">விதிமுறைகள்</a>
      </div>
      <small>
        © 2026 விளையாட்டு செய்திகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
      </small>
    </footer>
  );
}
