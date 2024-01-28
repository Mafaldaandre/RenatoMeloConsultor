import { CardData } from "../data/housingData";

class StateLoader {
  private key: string = "STATE_FAVORITOS";

  saveState(state: CardData[]): void {
    try {
      const serializedState: string = JSON.stringify(state);
      localStorage.setItem(this.key, serializedState);
      console.log("State saved successfully.");
    } catch (err) {
      console.error("Error saving state:", err);
    }
  }

  loadState(): CardData[] {
    try {
      const serializedState: string | null = localStorage.getItem(this.key);

      if (serializedState === null) {
        console.log("State not found. Initializing state...");
        return this.initializeState();
      }

      console.log("State loaded successfully.");
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Error loading state:", err);
      return this.initializeState();
    }
  }

  private initializeState(): CardData[] {
    console.log("Initializing state...");
    return [];
  }
}

export default StateLoader;
