"use client"
import { IProduct } from '@/types/api/product.type'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useProductCardHook } from './hooks'


export type ProductCardProps = Omit<IProduct,
    '_id' |
    'lastModifiedDate' |
    'createdDate'
> & {
    onAdd?: (productInfo: Omit<ProductCardProps,
        '_id' |
        'lastModifiedDate' |
        'createdDate'
    >) => void
}

export const ProductCard = ({
    name,
    description,
    price,
    productImage,
    onAdd,
}: ProductCardProps) => {
    const { lessOrMore, handleLessOrMoreToggle, productImageReq } = useProductCardHook({
        imageId: productImage.id
    })


    return (
        <Card sx={{ maxWidth: 345, position: 'relative', }}>
            <CardMedia
                component="img"
                image={productImageReq.data ? URL.createObjectURL(productImageReq.data) : "#"}
                alt="green iguana"
            />
            <CardContent sx={{
                height: lessOrMore ? 'auto' : 210,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                transition: 'all 0.7s ease-in-out',
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Typography
                sx={{
                    mx: 2,
                    cursor: 'pointer',
                    userSelect: 'none',
                    '&:hover': {
                        opacity: 0.8
                    },
                    '&:active': {
                        opacity: 0.50
                    },
                }}
                onClick={() => handleLessOrMoreToggle()}
                variant="subtitle1"
                color="text.disabled">
                {lessOrMore ? "less" : "more"}
            </Typography>
            <CardActions sx={{
                justifyContent: 'space-between'
            }}>
                <Button size="small" color="primary" variant="contained">
                    Add
                </Button>
                <Typography
                    sx={{
                        mx: 2
                    }}
                    variant="subtitle1"
                    color="text.disabled">
                    {price}
                </Typography>
            </CardActions>
        </Card>
    )
}