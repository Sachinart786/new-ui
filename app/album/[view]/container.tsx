import { Stack, Button, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const boldTextStyle = { fontWeight: "bold" };

export const PageContainer = ({ album }: any) => {
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
              width: "280px",
              height: "auto",
            }}
            priority
          />
          <Typography
            variant="body2"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "16px", mt: { xs: 1, sm: 2 } }}
          >
            {album.title} - {album.year}
          </Typography>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "15px" }}
          >
            {album.music}
          </Typography>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{ ...boldTextStyle, fontSize: "15px" }}
          >
            {album.lyric}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: "15px",
              ...boldTextStyle,
              mb: { xs: 1, sm: 1.5 },
            }}
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
            {album.tracks.map((track: any) => (
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
                    fontSize: { xs: "11px", sm: "13px" },
                  }}
                >
                  {track.no}.
                </Typography>
                <Typography
                  variant="body2"
                  color="#323c64"
                  sx={{
                    ...boldTextStyle,
                    fontSize: { xs: "11px", sm: "13px" },
                    flexGrow: 1,
                  }}
                >
                  {track.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#7681ab"
                  sx={{
                    fontSize: { xs: "9px", sm: "10px" },
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
              fontSize: "13px",
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
              fontSize: "13px",
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
              href={`https://new-apis-beryl.vercel.app/api/v1/files/download/${album.id}`}
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
