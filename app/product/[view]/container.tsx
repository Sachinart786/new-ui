"use client";
import { Stack, Button, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

export const PageContainer = ({ isToken, album }: any) => {
  return (
    <Box>
      <Grid container spacing={8} alignItems="flex-start">
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={album.image}
              alt={album.title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                objectFit: "cover",
              }}
              loading="lazy"
            />
          </Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", fontWeight: "bold", mt: 1 }}
          >
            {album.title} - {album.year}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Music: {album.music}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          >
            Lyric: {album.lyric}
          </Typography>
        </Grid>

        {/* Right Column - Tracks & Additional Info */}
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ fontSize: "18px", fontWeight: "bold", mb: 1.5 }}
          >
            Tracklist
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {album.tracks.map((track: any) => {
              return (
                <Box key={track._id} sx={{ display: "flex", gap: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {track.no}.
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#323c64"
                    sx={{ fontWeight: "bold" }}
                  >
                    {track.title}
                  </Typography>
                  <Typography variant="body2" color="#7681ab">
                    {track.singers}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "bold", mt: 4 }}
          >
            Playing Time: {album.playingTime}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "bold", mt: 1 }}
          >
            Total Size: {album.totalSize} MB
          </Typography>

          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
            <Link
              href={isToken ? `https://new-apis-beryl.vercel.app/api/v1/download/${album.id}` : "#"}
              passHref
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background:
                    "linear-gradient(180deg,rgb(31, 228, 175), #6ee6b4)",
                }}
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
