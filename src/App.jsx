import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsDetail from "./pages/NewsDetail";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
