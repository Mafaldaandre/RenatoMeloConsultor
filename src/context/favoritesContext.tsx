import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { CardData } from "../data/housingData";
import StateLoader from "./stateloader";

export interface FavoritesState {
  favorites: CardData[];
  loading: boolean;
  dispatch: React.Dispatch<FavoritesAction>;
}

export type FavoritesAction =
  | { type: "LOAD_STATE"; payload: CardData[] }
  | { type: "ADD_FAVORITE"; payload: CardData | CardData[] }
  | { type: "REMOVE_FAVORITE"; payload: CardData };

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoritesState | undefined>(undefined);
const stateLoader = new StateLoader();

const favoritesReducer = (
  state: CardData[],
  action: FavoritesAction
): CardData[] => {
  switch (action.type) {
    case "LOAD_STATE":
      const loadedState = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return loadedState;
    case "ADD_FAVORITE":
      const newFavorites = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      const checkIfExist = state.some((fav) =>
        newFavorites.some((newFav) => newFav.id === fav.id)
      );

      if (!checkIfExist) {
        stateLoader.saveState([...state, ...newFavorites]);
        return [...state, ...newFavorites];
      }
      return state;
    case "REMOVE_FAVORITE":
      const removedItemId = action.payload.id;
      const updatedState: CardData[] = state.filter(
        (fav) => fav.id !== removedItemId
      );
      stateLoader.saveState(updatedState); // Salvando o array completo
      return updatedState;
    default:
      return state;
  }
};

const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    stateLoader.loadState() || []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = stateLoader.loadState();
        dispatch({ type: "LOAD_STATE", payload: storedState || [] });
        setLoading(false); // Define loading como false quando os favoritos são carregados
      } catch (error) {
        console.error("Error loading state:", error);
        setLoading(false); // Tratamento de erro, mas ainda define loading como false
      }
    };

    loadState();
  }, [dispatch]);

  const contextValue = { favorites, loading, dispatch };
  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = (): FavoritesState => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites deve ser usado dentro de FavoritesProvider");
  }
  return context;
};

export { FavoritesProvider, useFavorites };
