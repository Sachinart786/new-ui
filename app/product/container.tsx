"use client";
import React, { useState } from "react";
import {
  Grid,
  Stack,
  Pagination,
  PaginationItem,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { get } from "lodash";
import { getAlbums } from "@/services/albumServices";
import { useRouter } from "next/navigation";

export const PageContainer = () => {
  const router = useRouter();
  const [albums, setAlbums] = useState<[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 16;
  const getProducts = async (page: number) => {
    try {
      const res = await getAlbums(page, itemsPerPage);
      if (get(res, "success", false)) {
        setLoading(false);
        setAlbums(get(res, "data", []));
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
          {albums && albums.length > 0 && (
            <Grid container spacing={3}>
              {albums.map((item: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
                  <div
                    onClick={() => router.push(`/product/${item._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "280px",
                        borderRadius: "5px",
                        overflow: "hidden",
                        boxShadow: 1,
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(194, 188, 188, 0.1)",
                        },
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </Box>

                    <Typography
                      variant="body2"
                      color="#323c64"
                      sx={{
                        textAlign: "center",
                        mt: 1,
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title} - {item.year}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
          {albums && albums.length > 0 && (
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
