import { useQuery, useQueries } from "@tanstack/react-query";
import { fetcher, fetcherBlob } from "./fetcher";
import { 
  ILoginBody, 
  ILoginResult, 
  IRefreshResult, 
  IRegisterBody, 
  IRegisterResult 
} from "@/types/api/auth.type";
import { IProductsPagination } from "@/types/api/product.type";


const baseUrl = process.env.BASE_URL || 'https://cctv.deno.dev/api' //|| 'http://localhost:3001/api' //
const baseUrlTimeout = Number(process.env.BASE_URL_TIMEOUT)


export const useRegister = (body: IRegisterBody) => useQuery({
  enabled: false,
  retry: 0,
  queryKey: ["useRegister", body],
  queryFn: () => fetcher<IRegisterResult>(baseUrl, "/signup", {
    method: "POST",
    body: JSON.stringify(body),
  }),
})


export const useLogin = (body: ILoginBody) => useQuery({
  enabled: false,
  retry: 1,
  queryKey: ["useLogin", body],
  queryFn: () => fetcher<ILoginResult>(baseUrl, "/signin", {
    method: "POST",
    body: JSON.stringify(body),
  }),
})


export const useRefresh = (token: string) => useQuery({
  enabled: false,
  retry: 1,
  queryKey: ["useRefresh"],
  queryFn: () => fetcher<IRefreshResult>(baseUrl, "/refresh", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`
    }
  }),
})


export const useProducts = () => useQuery({
  queryKey: ["useProducts"],
  queryFn: () => fetcher<IProductsPagination>(baseUrl, "/products", {
    method: "GET",
  }),
})


export const useProductImageById = (imageId: string) => useQuery({
  queryKey: ["useProducts", imageId],
  queryFn: () => fetcherBlob(baseUrl, `/product-image/${imageId}`, {
    method: "GET",
  }),
})