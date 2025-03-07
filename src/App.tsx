import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import { MyRoutes } from "./router";
import { getAllData } from "./service/apiHelpers";
import { apiRoutes } from "./service/apiRoutes";
import { useAuthStore } from "./store/auth-store";

export type userData = {
  id: number;
  title: string;
  type: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  socials: [];
};

function App() {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  useQuery({
    queryKey: ["useMe", token],
    queryFn: () => getAllData<userData, unknown>(apiRoutes.userMe),
    enabled: location.pathname != "/login" && Boolean(token),
  });

  return <MyRoutes />;
}

export default App;
