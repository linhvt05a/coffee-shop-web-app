import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/FooterBar";
import MenuBar from "./components/MenuBar";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Introduction from "./pages/Introduction";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Contact />} path="/lien-he" />
        <Route element={<Introduction />} path="/gioi-thieu" />
        <Route element={<News />} path="/tin-tuc" />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
