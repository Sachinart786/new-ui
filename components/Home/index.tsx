"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Pagination,
  PaginationItem,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

const itemsPerPage = 16;

const HomeContainer = ({ album }: { album: any[] }) => {
  const router = useRouter();
  const { data } = useSelector((state: any) => state.album);
  const [albums, setAlbums] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const totalPages = Math.ceil(album.length / itemsPerPage);

  useEffect(() => {
    if (album && album.length > 0) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setAlbums(album.slice(start, end));
      setLoading(false);
    }
  }, [album, currentPage]);

  useEffect(() => {
    if (data) {
      const res = album.find((item: any) => item.title === data.title);
      if (res) {
        setAlbums([res]);
      }
    }
  }, [data, album]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleView = (id: string) => {
    router.push(`/album/${id}`);
  };

  return (
    <div style={{ height: "auto" }}>
      {loading ? (
        <Grid container spacing={3}>
          {Array.from(new Array(8)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={280}
                  sx={{ borderRadius: "5px" }}
                />
                <Skeleton variant="text" height={28} sx={{ mt: 1 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
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
                      width={60}
                      height={60}
                      sizes="100vw"
                      style={{
                        borderRadius: "5px",
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
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title} - {item.year}
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