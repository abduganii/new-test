import ActionPage from "./form";
import SinglePage from "./info";
import Page from "./table";

const Route = [
  {
    url: "/crops",
    Element: Page,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
  {
    url: "/crops/:id",
    Element: ActionPage,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
  {
    url: "/crops/:id/info",
    Element: SinglePage,
    meta: { isAuth: true, role: new Set(["admin"]) },
  },
];

export default Route;
