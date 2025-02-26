// "use client";
// import { Stack, Button, Typography, Box, Grid } from "@mui/material";
// import Link from "next/link";
// import React from "react";

// interface Track {
//   _id: string;
//   no: number;
//   title: string;
//   singers: string;
// }

// interface Album {
//   id: string;
//   image: string;
//   title: string;
//   year: string;
//   music: string;
//   lyric: string;
//   tracks: Track[];
//   playingTime: string;
//   totalSize: string;
// }

// interface PageContainerProps {
//   isToken: boolean;
//   album: Album;
// }

// const boldTextStyle = { fontWeight: "bold" };

// export const PageContainer: React.FC<PageContainerProps> = ({
//   isToken,
//   album,
// }) => {
//   return (
//     <Box>
//       <Grid container spacing={8} alignItems="flex-start">
//         {/* Left Column - Album Image and Info */}
//         <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
//           <Box sx={{ width: "100%", height: "100%" }}>
//             <img
//               src={album.image || "/default-image.jpg"} // Fallback for missing image
//               alt={album.title}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "18px",
//                 objectFit: "cover",
//               }}
//               loading="lazy"
//             />
//           </Box>
//           <Typography
//             variant="body2"
//             sx={{ ...boldTextStyle, fontSize: "18px", mt: 1 }}
//           >
//             {album.title} - {album.year}
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ ...boldTextStyle, fontSize: "16px" }}
//           >
//             Music: {album.music}
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ ...boldTextStyle, fontSize: "16px" }}
//           >
//             Lyric: {album.lyric}
//           </Typography>
//         </Grid>

//         {/* Right Column - Tracks & Additional Info */}
//         <Grid item xs={12} sm={8}>
//           <Typography
//             variant="body1"
//             color="#323c64"
//             sx={{ fontSize: "18px", ...boldTextStyle, mb: 1.5 }}
//           >
//             Tracklist
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//             {album.tracks.map((track) => (
//               <Box key={track._id} sx={{ display: "flex", gap: 2 }}>
//                 <Typography variant="body2" sx={boldTextStyle}>
//                   {track.no}.
//                 </Typography>
//                 <Typography variant="body2" color="#323c64" sx={boldTextStyle}>
//                   {track.title}
//                 </Typography>
//                 <Typography variant="body2" color="#7681ab">
//                   {track.singers}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>

//           <Typography
//             variant="body2"
//             sx={{ fontSize: "14px", ...boldTextStyle, mt: 4 }}
//           >
//             Playing Time: {album.playingTime}
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ fontSize: "14px", ...boldTextStyle, mt: 1 }}
//           >
//             Total Size: {album.totalSize} MB
//           </Typography>

//           <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
//             <Link
//               href={
//                 isToken
//                   ? `https://new-apis-beryl.vercel.app/api/v1/download/${album.id}`
//                   : "#"
//               }
//               passHref
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   textTransform: "none",
//                   background:
//                     "linear-gradient(180deg,rgb(31, 228, 175), #6ee6b4)",
//                 }}
//                 disabled={!isToken} // Disable if no token
//               >
//                 Download
//               </Button>
//             </Link>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

import { Stack, Button, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

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
      <Grid container spacing={8} alignItems="flex-start">
        {/* Left Column - Album Image and Info */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src={album.image || "/default-image.jpg"} // Fallback for missing image
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
            sx={{ ...boldTextStyle, fontSize: "18px", mt: 1 }}
          >
            {album.title} - {album.year}
          </Typography>
          <Typography
            variant="body1"
            sx={{ ...boldTextStyle, fontSize: "16px" }}
          >
            Music: {album.music}
          </Typography>
          <Typography
            variant="body1"
            sx={{ ...boldTextStyle, fontSize: "16px" }}
          >
            Lyric: {album.lyric}
          </Typography>
        </Grid>

        {/* Right Column - Tracks & Additional Info */}
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ fontSize: "18px", ...boldTextStyle, mb: 1.5 }}
          >
            Tracklist
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {album.tracks.map((track) => (
              <Box
                key={track._id}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center", // Ensures both title and singer align on the same line
                }}
              >
                <Typography variant="body2" sx={boldTextStyle}>
                  {track.no}.
                </Typography>
                <Typography
                  variant="body2"
                  color="#323c64"
                  sx={{
                    ...boldTextStyle,
                    fontSize: { xs: "12px", sm: "15px" }, // Responsive font size
                    flexGrow: 1, // Ensures title takes up available space
                  }}
                >
                  {track.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#7681ab"
                  sx={{
                    fontSize: { xs: "12px", sm: "14px" }, // Smaller font size for mobile
                  }}
                >
                  {track.singers}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            variant="body2"
            sx={{ fontSize: "14px", ...boldTextStyle, mt: 4 }}
          >
            Playing Time: {album.playingTime}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", ...boldTextStyle, mt: 1 }}
          >
            Total Size: {album.totalSize} MB
          </Typography>

          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
            <Link
              href={
                isToken
                  ? `https://new-apis-beryl.vercel.app/api/v1/download/${album.id}`
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
                disabled={!isToken} // Disable if no token
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
