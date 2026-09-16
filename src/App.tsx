import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { StoryPage } from "./pages/StoryPage";
import { VisitPage } from "./pages/VisitPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </SiteLayout>
    </HashRouter>
  );
}

export default App;
