import qs from "qs";

import api from "./fetchInstance";

// interface iError {
//   data: null;
//   error: {
//     message: string;
//     name: string;
//     status: number;
//   };
// }

export const getAllData = async <T, Q>(url: string, query?: Q): Promise<T> => {
  const params = query
    ? `?${qs.stringify(query, { arrayFormat: "repeat" })}`
    : "";

  const res = await api.get(`${url}${params}`);

  return res.data;
};

export const getByIdData = async <T, Q>(
  url: string,
  id: string,
  query?: Q
): Promise<T> => {
  const params = query
    ? `?${qs.stringify(query, { arrayFormat: "repeat" })}`
    : "";

  const res = await api.get(`${url}/${id}${params}`);

  return res.data;
};

export const AddData = async <D extends object>(url: string, data: D) => {
  const res = await api.post(url, data);
  return res.data;
};

export const UpdateData = async <D extends object>(
  url: string,
  id: string,
  data: D
) => {
  const res = await api.put(`${url}/${id}`, data);
  return res.data;
};

export const DeleteData = async (url: string, id: string) => {
  const res = await api.delete(`${url}/${id}`);
  return res.data;
};

export const UploadFile = async (data: FormData, folder: string) => {
  const res = await api.post(`/upload/custom_upload?folder=${folder}`, data);
  return res.data;
};

// const handleError = (error: iError) => {
//   const removeToken = useAuthStore.getState().removeToken;

//   if (error.error.status == 401) {
//     removeToken();
//   }
//   toast.error(error.error.message);
// };
