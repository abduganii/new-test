import {
  DefinedInitialDataOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";

import { AddData, getByIdData, UpdateData } from "@/service/apiHelpers";
import { apiRoutes } from "@/service/apiRoutes";

import { TActionData, TQuery } from "../type";
import { CropFormType } from "./schema";

interface IResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}


interface IData {
  options?: DefinedInitialDataOptions<TActionData>;
  id: string | undefined;
  queries?: TQuery;
}
interface IMute {
  data: CropFormType;
  id: string | undefined;
}

export const useDataLibrary = ({
  ...options
}: UseMutationOptions<IResponse, Error, IMute, unknown>) =>
  useMutation({
    ...options,
    mutationFn: async ({ data, id }) => {
     
      if (id)
        return await UpdateData<CropFormType>(apiRoutes.dataLibrary, id, data);
      return await AddData<CropFormType>(apiRoutes.dataLibrary, data);
    },
  });

export const useDataLibraryId = ({ options, id, queries }: IData) =>
  useQuery({
    ...options,
    queryKey: [apiRoutes.dataLibrary, id],
    enabled: Boolean(id),
    queryFn: () =>
      getByIdData<TActionData, TQuery>(apiRoutes.crops, id || "", queries),
  });
