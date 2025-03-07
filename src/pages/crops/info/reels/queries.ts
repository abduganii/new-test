import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";
import { ReelsData, ReelsQuery } from "./type";
import { TResponse } from "@/types";

interface IReels {
  options?: DefinedInitialDataOptions<TResponse<ReelsData>>;
  queries?: ReelsQuery;
  enable?: boolean;
}

export const useReels = ({ options, queries, enable }: IReels) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.reels, queries],
    queryFn: () =>
      getAllData<TResponse<ReelsData>, ReelsQuery>(apiRoutes.reels, queries),
    enabled: enable,
  });
