"use client";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const boldTextStyle = { fontWeight: "bold" };

export const PageContainer = ({ album }: any) => {
  const router = useRouter();
  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 8 }} alignItems="flex-start">
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Image
            src={album.image}
            alt={album.title}
            width={260}
            height={260}
            sizes="100vw"
            style={{
              borderRadius: "5px",
              width: "260px",
              height: "auto",
            }}
            priority
          />
          <Typography
            variant="body2"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "18px", mt: { xs: 1, sm: 2 } }}
          >
            {album.title} - {album.year}
          </Typography>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "16px" }}
          >
            {album.music}
          </Typography>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "16px" }}
          >
            {album.lyric}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, sm: 2 },
            }}
          >
            {album.tracks.map((track: any) => (
              <Box
                key={track._id}
                onClick={() => router.push(`/track/${track._id}`)}
                sx={{
                  display: "flex",
                  gap: 0.8,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="#323c64"
                    sx={{
                      ...boldTextStyle,
                      fontSize: "14px",
                      flexGrow: 1,
                    }}
                  >
                    {track.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#7681ab"
                    sx={{
                      fontSize: { xs: "10px", sm: "12px" },
                    }}
                  >
                    {track.singers}
                  </Typography>
                </Box>
                <Typography
                  textAlign="end"
                  variant="body2"
                  color="#323c64"
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  {track.length}.
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
