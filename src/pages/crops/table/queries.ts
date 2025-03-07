import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";
import { TResponse } from "@/types";
import { CropData, CropQuery } from "../type";

interface ICrops {
  options?: DefinedInitialDataOptions<TResponse<CropData>>;
  queries?: CropQuery;
}
const useCrops = ({ options, queries }: ICrops) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.crops, queries],
    queryFn: () =>
      getAllData<TResponse<CropData>, CropQuery>(apiRoutes.crops, queries),
  });

export default useCrops;
