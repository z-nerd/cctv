import { fetcher } from "@/hooks/restful/fetcher"
import HomeClient from "./HomeClient"
import { IProductsPagination } from "@/types/api/product.type"


const getProducts = async () => {
  try {
    const res =  await fetcher<IProductsPagination>("https://cctv.deno.dev/api", "/products", {
      method: "GET",
      next: {
        revalidate: 600 ,

      }
    })

    return res
  } catch (error: any) {
    const res = {
      error: {
        name: error?.name as String,
        message: error?.message as String,
        ...error,
      }
    }
    console.log(res)

    return res
  }
}


export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      {
        !("error" in products) &&
        <HomeClient 
        productsData={products}
        productsIsSuccess={true} />
      }
      
    </main>
  )
}
