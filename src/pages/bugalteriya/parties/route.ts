
import SinglePage from "./info";
import Page from "./table";

const Route = [
  {
    url: "/parties",
    Element: Page,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
  
  {
    url: "/parties/:id/info",
    Element: SinglePage,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
];

export default Route;
