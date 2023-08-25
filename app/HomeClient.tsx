"use client"
import { ProductCard } from "@/components/product-card";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Container, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { usePageHooks } from "./hooks";
import { IProductsPagination } from "@/types/api/product.type";


interface HomeClientProps {
    productsData: IProductsPagination
    productsIsSuccess: boolean
    // productsIsFetched: boolean
}


const HomeClient = ({productsData, productsIsSuccess} : HomeClientProps) => {
    const {
        userInfo,
        // productsData,
        // productsIsSuccess,
    } = usePageHooks()

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CCTV Store
                    </Typography>
                    {userInfo?.id
                        ?
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ px: 1 }}>
                                {userInfo.fullname}
                            </Typography>
                            <AccountCircle />
                        </Box>
                        :
                        <Link href="/login" color="text.secondary">
                            {"Login"}
                        </Link>
                    }
                </Toolbar>
            </AppBar>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {
                        (productsIsSuccess &&
                            productsData
                        )
                        && productsData.data.map(product => {
                            return (
                                <Grid item key={product._id} xs={12} sm={6} md={4}>
                                    <ProductCard
                                        description={product.description}
                                        name={product.name}
                                        price={product.price}
                                        productImage={product.productImage}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}


export default HomeClient;