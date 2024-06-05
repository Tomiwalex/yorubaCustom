import "./App.css";
import AboutPage from "./pages/AboutPage";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/blog/:id" Component={BlogDetails} />
          <Route path="/about" Component={AboutPage} />
          <Route path="*" Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
