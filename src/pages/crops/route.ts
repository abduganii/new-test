import ActionPage from "./form";
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
  
];

export default Route;
