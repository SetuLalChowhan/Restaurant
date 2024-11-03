import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#" element={<About />} />
        <Route path="/#" element={<Portfolio />} />
        <Route path="/#" element={<Blog />} />
        <Route path="/#" element={<Clients />} />
        <Route path="/#" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
