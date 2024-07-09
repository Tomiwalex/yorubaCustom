import "./App.css";
import AboutPage from "./pages/AboutPage";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import PodcastPage from "./pages/PodcastPage";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
import ContestPage from "./pages/ContestPage.jsx";
import VotingPage from "./pages/VotingPage.jsx";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/blog/:id" Component={BlogDetails} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/gallery" Component={GalleryPage} />
          <Route path="/store" Component={StorePage} />
          <Route path="/contest" Component={ContestPage} />
          <Route path="/vote/:id" Component={VotingPage} />
          <Route path="/store/:id" Component={ProductDetails} />
          <Route path="/podcast" Component={PodcastPage} />
          <Route path="*" Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
