import {  Box, Grid, Pagination } from "@mui/material";
import { Boxproduct } from "../components/Boxproduct";
import { useQuery } from '@tanstack/react-query'

import { useSearchParams } from "react-router-dom";
import z from "zod";
import { findCarboidratos } from "../api/find-carboidratos";

export function Carboidratos(){
const [searchParams, setSearchParams] = useSearchParams();

  const brands = searchParams.get("brands")?.split(",").filter((brand)=> brand !== '');
  const page = z.coerce.number().parse(searchParams.get('page') ?? '1')

  const { data, isLoading } = useQuery({
    queryKey: ['carboidratos', page, brands?.length === 0 ? undefined : brands],
    queryFn: () =>
        findCarboidratos({
            page,
            brands: brands?.length === 0 ? undefined : brands
        }),
  })

    function handlePagination(_, currentPage) {
        setSearchParams((state) => {
            state.set('page', currentPage.toString())
            return state
        })
     }



    return <Box>
        <Grid sx={{ flexGrow: 1, mt: 0.1 }} container spacing={2}>
            <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
                {data?.products.map((product, index) => {
                return (
                    <Grid key={index} item sm={6} md={4}>
                    <Boxproduct
                        primery={"#121313ff"}
                        secudary={"#0F9BF2"}
                        product={product}
                    />
                    </Grid>
                );
                })}
            </Grid>
            </Grid>
        </Grid>
        <Box display='flex' justifyContent='center' mt={2} mb={2} width='100%'>
            <Pagination count={data?.pages} color="secondary" disabled={isLoading} page={page} onChange={handlePagination}/>
        </Box>
    </Box>
}