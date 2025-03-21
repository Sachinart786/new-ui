"use client";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const boldTextStyle = { fontWeight: "bold" };

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

export const PageContainer = () => {
  const theme = useTheme();

  const [play, setPlay] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const ref = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (ref.current) {
      if (play) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
      setPlay((prev) => !prev);
    }
  };

  const handleClick = (e: any) => {
    if (ref.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
      e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.offsetWidth;
      const newProgress = (clickPosition / progressBarWidth) * 100;
      setProgress(newProgress);
      ref.current.currentTime = (newProgress / 100) * ref.current.duration;
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      if (ref.current && ref.current.duration > 0) {
        const currentProgress =
          (ref.current.currentTime / ref.current.duration) * 100;
        setProgress(Math.min(currentProgress, 100)); // Avoid going above 100%
      }
    };

    let timer: NodeJS.Timeout;
    if (play) {
      timer = setInterval(updateProgress, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [play]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 8 }} alignItems="flex-start">
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <br />
          <Image
            src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/27/19/b8/2719b880-c4b3-5fd1-683e-90944a330c57/8901854091423.jpg/600x600bf-60.jpg"
            alt="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/27/19/b8/2719b880-c4b3-5fd1-683e-90944a330c57/8901854091423.jpg/600x600bf-60.jpg"
            width={260}
            height={260}
            sizes="100vw"
            style={{
              borderRadius: "18px",
              width: "300px",
              height: "auto",
            }}
            priority
          />
          <br />
          <br />
          <Typography
            variant="body2"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "18px", mt: { xs: 1, sm: 2 } }}
          >
            Kasam Kha Ke Kaho (Lofi Mix)
          </Typography>
          <Typography
            variant="body1"
            color="#7681ab"
            sx={{ fontSize: "14px", mt: "4px" }}
          >
            Kumar Sanu & Alka Yagnik
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <audio
            ref={ref}
            onPlay={() => setPlay(true)}
            onPause={() => setPlay(false)}
            onEnded={() => setPlay(false)}
            src="https://new-apis-beryl.vercel.app/api/v1/files/play/67dd1105922a46522b6ff528"
          >
            <source
              src="https://new-apis-beryl.vercel.app/api/v1/files/play/67dd1105922a46522b6ff528"
              type="audio/flac"
            />
          </audio>
          <br />
          <br />
          <br />
          <Box padding="10px">
            <IconButton sx={{ marginLeft: "156px" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <BorderLinearProgress
              sx={{ mt: "4px" }}
              variant="determinate"
              value={progress}
              onClick={handleClick}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ mt: "4px" }}
            >
              <Typography
                variant="body2"
                color="#323c64"
                sx={{ fontSize: { xs: "10px", sm: "12px" } }}
              >
                {ref.current ? formatTime(ref.current.currentTime) : "0:00"}
              </Typography>
              <Typography
                variant="body2"
                color="#323c64"
                sx={{ fontSize: { xs: "10px", sm: "12px" } }}
              >
                {ref.current ? formatTime(ref.current.duration) : "0:00"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "48px",
              justifyContent: "center",
            }}
          >
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon color="primary" />
              ) : (
                <SkipPreviousIcon color="primary" />
              )}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={handlePlay}>
              {!play ? (
                <PlayArrowIcon color="primary" sx={{ height: 38, width: 38 }} />
              ) : (
                <PauseIcon color="primary" sx={{ height: 38, width: 38 }} />
              )}
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon color="primary" />
              ) : (
                <SkipNextIcon color="primary" />
              )}
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};