import { BrowserRouter } from "react-router-dom";
import HomePage from "./features/HomePage";
import MainLayout from "./Layout";
function App() {
  return (
    <BrowserRouter>
      <MainLayout path="/" children={<HomePage />} />
    </BrowserRouter>
  );
}

export default App;
