import SinglePage from "./info";
import Page from "./table";

const Route = [
  {
    url: "/bugalteriya/data-library",
    Element: Page,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
  {
    url: "/bugalteriya/data-library/:id",
    Element: Page,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
  {
    url: "/product/:id/info",
    Element: SinglePage,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
];

export default Route;
