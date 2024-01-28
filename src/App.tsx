import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { FavoritesProvider } from "./context/favoritesContext";

const App = () => {
  return (
    <div>
      <FavoritesProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavoritesProvider>
    </div>
  );
};

export default App;
