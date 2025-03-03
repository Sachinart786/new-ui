"use client";
import React from "react";
import Link from "next/link";
import { Stack, Button, Typography, Box, Grid } from "@mui/material";

interface Track {
  _id: string;
  no: number;
  title: string;
  singers: string;
}

interface Album {
  id: string;
  image: string;
  title: string;
  year: string;
  music: string;
  lyric: string;
  tracks: Track[];
  playingTime: string;
  totalSize: string;
}

interface PageContainerProps {
  isToken: boolean;
  album: Album;
}

const boldTextStyle = { fontWeight: "bold" };

export const PageContainer: React.FC<PageContainerProps> = ({
  isToken,
  album,
}) => {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 8 }} alignItems="flex-start">
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src={album.image || "/default-image.jpg"}
              alt={album.title}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "90%",
                borderRadius: "18px",
                objectFit: "cover",
                margin: "0 auto",
              }}
              loading="lazy"
            />
          </Box>
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
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ fontSize: "18px", ...boldTextStyle, mb: { xs: 1, sm: 1.5 } }}
          >
            Tracklist
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, sm: 2 },
            }}
          >
            {album.tracks.map((track) => (
              <Box
                key={track._id}
                sx={{
                  display: "flex",
                  gap: 0.8,
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="#323c64"
                  sx={{
                    ...boldTextStyle,
                    fontSize: { xs: "12px", sm: "14px" },
                  }}
                >
                  {track.no}.
                </Typography>
                <Typography
                  variant="body2"
                  color="#323c64"
                  sx={{
                    ...boldTextStyle,
                    fontSize: { xs: "12px", sm: "14px" },
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
            ))}
          </Box>

          <Typography
            variant="body2"
            color="#323c64"
            sx={{
              fontSize: "14px",
              ...boldTextStyle,
              mt: { xs: 2, sm: 4 },
            }}
          >
            Playing Time: {album.playingTime}
          </Typography>
          <Typography
            variant="body2"
            color="#323c64"
            sx={{
              fontSize: "14px",
              ...boldTextStyle,
              mt: { xs: 1, sm: 1 },
            }}
          >
            Total Size: {album.totalSize} MB
          </Typography>

          <Stack
            direction="row"
            justifyContent="flex-end"
            sx={{ mt: { xs: 0.5, sm: 3 } }}
          >
            <Link
              href={
                isToken
                  ? `https://new-apis-beryl.vercel.app/api/v1/files/download/${album.id}`
                  : "#"
              }
              passHref
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background:
                    "linear-gradient(180deg,rgb(31, 228, 175), #6ee6b4)",
                }}
                disabled={!isToken}
              >
                Download
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
