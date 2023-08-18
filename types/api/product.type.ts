export interface IProduct {
    _id: string
    name: string
    description: string
    price: string
    productImage: {
        id: string
        alt: string
    },
    createdDate: string
    lastModifiedDate: string
}


export interface IProductsPagination {
    skip: number
    limit: number
    count: number
    data: IProduct[]
}




