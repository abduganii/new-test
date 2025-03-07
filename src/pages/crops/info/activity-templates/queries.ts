import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

import { getAllData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";
import { TResponse } from "@/types";
import { ActivityTemplatesData, ActivityTemplatesQuery } from "./type";

interface IActivityTemplates {
  options?: DefinedInitialDataOptions<TResponse<ActivityTemplatesData>>;
  queries?: ActivityTemplatesQuery;
  enable?: boolean;
}

export const useActivityTemplate = ({
  options,
  queries,
  enable,
}: IActivityTemplates) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.activityTemplates, queries],
    queryFn: () =>
      getAllData<TResponse<ActivityTemplatesData>, ActivityTemplatesQuery>(
        apiRoutes.activityTemplates,
        queries
      ),
    enabled: enable,
  });
