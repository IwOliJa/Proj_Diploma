import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const menulist = [
  { page: "Main Page", path: "/" },
  { page: "Categories", path: "/categories" },
  { page: "All products", path: "/products" },
  { page: "All sales", path: "/sales" },
];

export const menulist2 = [
  { id: 1, item: "Main Page" },
  { id: 2, item: "Categories" },
];

export const menulist3 = [
  { id: 1, item: "Main Page" },
  { id: 2, item: "Categories" },
  { id: 3, item: "" },
];

export const menulist4 = [
  { id: 1, item: "Main Page" },
  { id: 2, item: "All Products" },
];
export const menulist5 = [
  { id: 1, item: "Main Page" },
  { id: 2, item: "All Sales" },
];

export const menulist6 = [
  { id: 1, item: "Main Page" },
  { id: 2, item: "Categories" },
  { id: 3, item: "" },
  { id: 4, item: "" },
];

export const main_url = "http://localhost:3333";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
