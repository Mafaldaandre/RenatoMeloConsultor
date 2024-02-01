import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { FavoritesProvider } from "./context/favoritesContext";
import { ScrollToTop } from "./components/scroll/ScrollToTop";

const App = () => {
  return (
    <div>
      <FavoritesProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </FavoritesProvider>
    </div>
  );
};

export default App;
