import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";
import { TResponse } from "@/types";
import { FertilizationsData, FertilizationsQuery } from "./type";

interface IDiseasesTemplates {
  options?: DefinedInitialDataOptions<TResponse<FertilizationsData>>;
  queries?: FertilizationsQuery;
  enable?: boolean;
}

export const useFertilizations = ({
  options,
  queries,
  enable,
}: IDiseasesTemplates) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.fertilizations, queries],
    queryFn: () =>
      getAllData<TResponse<FertilizationsData>, FertilizationsQuery>(
        apiRoutes.fertilizations,
        queries
      ),
    enabled: enable,
  });
