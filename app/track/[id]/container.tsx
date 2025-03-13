// "use client";
// import { Box, Grid, Typography, Stack, IconButton } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
// import React, { useState, useEffect, useRef } from "react";

// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import PauseIcon from "@mui/icons-material/Pause";
// import SkipNextIcon from "@mui/icons-material/SkipNext";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";

// const boldTextStyle = { fontWeight: "bold" };

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 5,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[200],
//     ...theme.applyStyles("dark", {
//       backgroundColor: theme.palette.grey[800],
//     }),
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: "#1a90ff",
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#308fe8",
//     }),
//   },
// }));

// export const PageContainer = () => {
//   const theme = useTheme();

//   const [play, setPlay] = useState<boolean>(true);
//   const progressRef = useRef<number>(0);
//   const ref = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);

//   const handlePlay = () => {
//     setPlay((prev) => !prev);
//     if (ref.current) {
//       if (play) {
//         ref.current.play();
//       } else {
//         ref.current.pause();
//       }
//     }
//   };

//   useEffect(() => {
//     let timer: NodeJS.Timeout | undefined;

//     if (play && ref.current) {
//       timer = setInterval(() => {
//         const currentProgress =
//           (ref.current.currentTime / ref.current.duration) * 100;
//         progressRef.current = currentProgress >= 100 ? 100 : currentProgress;
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   }, [play]);
//   return (
//     <Box>
//       <Grid container spacing={{ xs: 2, sm: 8 }} alignItems="flex-start">
//         <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
//           {/* <Image
//             src={album.image}
//             alt={album.title}
//             width={260}
//             height={260}
//             sizes="100vw"
//             style={{
//               borderRadius: "5px",
//               width: "260px",
//               height: "auto",
//             }}
//             priority
//           /> */}
//           <Typography
//             variant="body2"
//             color="#323c64"
//             sx={{ ...boldTextStyle, fontSize: "18px", mt: { xs: 1, sm: 2 } }}
//           >
//             {/* {album.title} - {album.year} */}khkh
//           </Typography>
//           <Typography
//             variant="body1"
//             color="#323c64"
//             sx={{ ...boldTextStyle, fontSize: "16px" }}
//           >
//             {/* {album.music} */} hkj
//           </Typography>
//           <Typography
//             variant="body1"
//             color="#323c64"
//             sx={{ ...boldTextStyle, fontSize: "16px" }}
//           >
//             {/* {album.lyric} */}ggggj
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={8}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: { xs: 1, sm: 2 },
//             }}
//           >
//             {/* {album.tracks.map((track: any) => ( */}
//             <Box
//               // key={track._id}
//               sx={{
//                 display: "flex",
//                 gap: 0.8,
//                 alignItems: "center",
//               }}
//             >
//               <Box>
//                 <Typography
//                   variant="body2"
//                   color="#323c64"
//                   sx={{
//                     ...boldTextStyle,
//                     fontSize: "14px",
//                     flexGrow: 1,
//                   }}
//                 >
//                   {/* {track.title} */}uy
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="#7681ab"
//                   sx={{
//                     fontSize: { xs: "10px", sm: "12px" },
//                   }}
//                 >
//                   {/* {track.singers} */} jkh
//                 </Typography>
//               </Box>
//               <Stack justifyContent="end">
//                 <Typography
//                   textAlign="end"
//                   variant="body2"
//                   color="#323c64"
//                   sx={{
//                     fontSize: "12px",
//                   }}
//                 >
//                   {/* {track.length}. */}jhkh
//                 </Typography>
//               </Stack>
//             </Box>
//             {/* ))} */}
//           </Box>
//           <audio ref={ref} src="your-media-file.mp3" />
//           <BorderLinearProgress
//             variant="determinate"
//             value={progressRef.current}
//           />
//           <br />
//           <Box
//             sx={{
//               display: "flex",
//               gap: "48px",
//               justifyContent: "center",
//             }}
//           >
//             <IconButton aria-label="previous">
//               {theme.direction === "rtl" ? (
//                 <SkipNextIcon color="primary" />
//               ) : (
//                 <SkipPreviousIcon color="primary" />
//               )}
//             </IconButton>
//             <IconButton aria-label="play/pause" onClick={handlePlay}>
//               {!play ? (
//                 <PlayArrowIcon color="primary" sx={{ height: 38, width: 38 }} />
//               ) : (
//                 <PauseIcon color="primary" sx={{ height: 38, width: 38 }} />
//               )}
//             </IconButton>
//             <IconButton aria-label="next">
//               {theme.direction === "rtl" ? (
//                 <SkipPreviousIcon color="primary" />
//               ) : (
//                 <SkipNextIcon color="primary" />
//               )}
//             </IconButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

"use client";
import { Box, Grid, Typography, Stack, IconButton } from "@mui/material";
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
            src="https://tips.in/wp-content/uploads/2019/02/Raaz-1024x1024.jpg"
            alt="https://tips.in/wp-content/uploads/2019/02/Raaz-1024x1024.jpg"
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
            Kitna Pyaara Hai
          </Typography>
          <Typography
            variant="body1"
            color="#7681ab"
            sx={{ fontSize: "14px", mt: "4px" }}
          >
            Udit Narayan & Alka Yagnik
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <audio
            ref={ref}
            onPlay={() => setPlay(true)}
            onPause={() => setPlay(false)}
            onEnded={() => setPlay(false)}
            src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
          >
            <source
              src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
              type="audio/ogg"
            />
          </audio>
          <br />
          <br />
          <br />
          <Box padding="10px">
            <IconButton sx={{ marginLeft: "160px" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <BorderLinearProgress
              sx={{ mt: "4px" }}
              variant="determinate"
              value={progress}
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
