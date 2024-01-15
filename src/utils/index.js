import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const menulist = [
  { page: "Main Page", path: "/" },
  { page: "Categories", path: "/categories" },
  { page: "All products", path: "/products" },
  { page: "All sales", path: "/sales" },
];

export const menulist2 = [
  { id: 1, item: "Main Page", path: '/' },
  { id: 2, item: "Categories", path: '/categories' },
];

export const menulist4 = [
  { id: 1, item: "Main Page", path: '/' },
  { id: 2, item: "All Products", path: '/products' },
];
export const menulist5 = [
  { id: 1, item: "Main Page", path: '/' },
  { id: 2, item: "All Sales", path: '/sales' },
];

export const main_url = "http://localhost:3333";

export default function ScrollToTop () {
  const { pathname } = useLocation();
  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [ pathname ] );
  return null;
}

export function getCartFromLocStor () {
  const data = localStorage.getItem( "cart" );
  return data ? JSON.parse( localStorage.getItem( "cart" ) ) : [];
}
