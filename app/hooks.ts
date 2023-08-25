import { useBrowserStorage, useProducts } from "@/hooks"

export const usePageHooks = () => {
    // const { 
    //     data: productsData, 
    //     isFetched: productsIsFetched,
    //     isSuccess: productsIsSuccess,
    // } = useProducts()
    const { userInfo } = useBrowserStorage()
    

    return {
        userInfo,
        // productsData, 
        // productsIsSuccess,
        // productsIsFetched,
    }
}