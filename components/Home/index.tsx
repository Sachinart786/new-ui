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
import { useSelector } from "react-redux";
import Image from "next/image";

const HomeContainer = () => {
  const router = useRouter();
  const { data } = useSelector((state: any) => state.album);
  const [albums, setAlbums] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 16;

  const getCachedAlbums = (page: number) => {
    const cachedData = sessionStorage.getItem(`albums_page_${page}`);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setAlbums(parsedData.albums);
      setTotalPages(parsedData.totalPages);
      setLoading(false);
      return true;
    }
    return false;
  };

  const getProducts = async (page: number) => {
    try {
      const res = await getAlbums(page, itemsPerPage);
      if (get(res, "success", false)) {
        setLoading(false);
        const fetchedAlbums = get(res, "data", []);
        const fetchedTotalPages = get(res, "totalPages", 0);
        sessionStorage.setItem(
          `albums_page_${page}`,
          JSON.stringify({
            albums: fetchedAlbums,
            totalPages: fetchedTotalPages,
          })
        );
        setAlbums(fetchedAlbums);
        setTotalPages(fetchedTotalPages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleView = (id: string) => {
    router.push(`/album/${id}`);
  };

  useEffect(() => {
    if (!getCachedAlbums(currentPage)) {
      setLoading(true);
      getProducts(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (data && albums.length === 0) {
      getProducts(currentPage);
    } else {
      const res = albums.find((item: any) => item.title === data.title);
      if (res) {
        setAlbums([res]);
        console.log("Found album:", res);
      }
    }
  }, [data]);

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
                  <Box
                    onClick={() => handleView(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={264}
                      height={264}
                      sizes="100vw"
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "auto",
                      }}
                      priority
                    />

                    <Typography
                      variant="body2"
                      color="#323c64"
                      sx={{
                        textAlign: "center",
                        mt: 1,
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
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

export default HomeContainer;
