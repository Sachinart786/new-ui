"use client";
import React, { useState, useEffect } from "react";
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

  // Function to check and retrieve cached data from localStorage
  const getCachedAlbums = (page: number) => {
    const cachedData = localStorage.getItem(`albums_page_${page}`);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setAlbums(parsedData.albums);
      setTotalPages(parsedData.totalPages);
      setLoading(false);
      return true; // Indicating data is cached
    }
    return false;
  };

  // Function to fetch albums from the API
  const getProducts = async (page: number) => {
    try {
      const res = await getAlbums(page, itemsPerPage);
      if (get(res, "success", false)) {
        setLoading(false);
        const fetchedAlbums = get(res, "data", []);
        const fetchedTotalPages = get(res, "totalPages", 0);

        // Store the fetched data in localStorage
        localStorage.setItem(
          `albums_page_${page}`,
          JSON.stringify({
            albums: fetchedAlbums,
            totalPages: fetchedTotalPages,
          })
        );

        // Update state with fetched data
        setAlbums(fetchedAlbums);
        setTotalPages(fetchedTotalPages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data (with cache check) on page load or page change
  useEffect(() => {
    if (!getCachedAlbums(currentPage)) {
      setLoading(true); // Ensure loading state is shown while fetching
      getProducts(currentPage);
    }
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
                  <div onClick={() => router.push(`/product/${item._id}`)}>
                    <Box
                      sx={{
                        width: "100%",
                        height: 0, // Set height to 0 initially
                        paddingBottom: "100%", // Create a square container using padding-bottom
                        position: "relative",
                        borderRadius: "5px",
                        overflow: "hidden",
                        boxShadow: 1,
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(194, 188, 188, 0.1)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          position: "absolute", // Position the image inside the square Box
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "100%",
                          height: "100%",
                          objectFit: "contain", // Ensures image fits inside the square without cropping
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
                        fontSize: { xs: "14px", sm: "16px", md: "16px" },
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
