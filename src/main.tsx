import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initNative } from "./lib/native";
import { warmIndex } from "./lib/searchIndex";

createRoot(document.getElementById("root")!).render(<App />);
initNative();
warmIndex();

