import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";

import { AboutUsQuery, AboutUsResponse } from "./types";

interface IAboutUs {
  options?: DefinedInitialDataOptions<AboutUsResponse>;
  queries?: AboutUsQuery;
}
const useProducts = ({ options, queries }: IAboutUs) =>
  useQuery({
    ...options,
    queryKey: ["products", queries],
    queryFn: () =>
      getAllData<AboutUsResponse, AboutUsQuery>(apiRoutes.products, queries),
  });

export default useProducts;
