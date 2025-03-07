import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";
import { TResponse } from "@/types";
import { DiseasesData, DiseasesQuery } from "./type";

interface IDiseasesTemplates {
  options?: DefinedInitialDataOptions<TResponse<DiseasesData>>;
  queries?: DiseasesQuery;
  enable?: boolean;
}

export const useDiseases = ({ options, queries, enable }: IDiseasesTemplates) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.diseases, queries],
    queryFn: () =>
      getAllData<TResponse<DiseasesData>, DiseasesQuery>(
        apiRoutes.diseases,
        queries
      ),
    enabled: enable,
  });
