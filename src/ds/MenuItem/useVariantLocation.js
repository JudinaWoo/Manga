import { useLocation } from "react-router-dom";
import { variants } from ".";

export default function useVariantLocation() {
  const { pathname } = useLocation();

  const variantPath = (path) =>
    pathname === path ? variants.current : variants.default;
  return { variantPath };
}
