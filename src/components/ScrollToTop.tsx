import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // useLocation écoute l'URL actuelle
  const { pathname } = useLocation();

  useEffect(() => {
    // Dès que le pathname change, on remonte le scroll à x:0, y:0
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
