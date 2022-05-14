import { Route, Routes } from "react-router-dom";
import Footer from "../components/FooterBar";
import MenuBar from "../components/MenuBar";

export type MainLayoutProps = {
  children: any;
  path: string;
};
const MainLayout = ({ children, path }: MainLayoutProps) => {
  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path={path} element={children} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
