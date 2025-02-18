"use client";
import React, { useState } from "react";
import {
  Grid,
  Stack,
  Pagination,
  PaginationItem,
  CircularProgress,
} from "@mui/material";
import { get } from "lodash";
import { getProduct } from "@/services/productServices";

export const PageContainer = () => {
  const [products, setProducts] = useState<[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 16;
  const getProducts = async (page: number) => {
    try {
      const res = await getProduct(page, itemsPerPage);
      if (get(res, "success", false)) {
        setLoading(false);
        setProducts(get(res, "data", []));
        setTotalPages(get(res, "totalPages", ""));
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div style={{ height: "auto" }}>
      {loading ? (
        <Stack justifyContent="center" alignItems="center" marginTop="210px">
          <CircularProgress size={60} />
        </Stack>
      ) : (
        <>
          <Grid container spacing={2}>
            {products &&
              products.length > 0 &&
              products.map((item: any) => (
                <Grid item xs={3} key={item.id}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      style={{
                        width: "180px",
                        height: "180px",
                      }}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <h6>{item.title}</h6>
                  </div>
                </Grid>
              ))}
          </Grid>
          {products && products.length > 0 && (
            <Stack
              spacing={2}
              mt={3}
              justifyContent="center"
              alignItems="center"
            >
              <Pagination
                variant="outlined"
                color="primary"
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => <PaginationItem {...item} />}
              />
            </Stack>
          )}
        </>
      )}
    </div>
  );
};
