import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logoUrl from "../ShortcutzLuanda_Logowhatsapp-removebg-preview.png";

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
if (favicon) {
  favicon.href = logoUrl;
} else {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = logoUrl;
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
