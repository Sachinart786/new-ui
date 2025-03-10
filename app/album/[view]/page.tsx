import { viewAlbum } from "@/services/albumServices";
import { Stack, Button, Typography, Box, Grid } from "@mui/material";
import { get } from "lodash";
import Image from "next/image";
import Link from "next/link";

const boldTextStyle = { fontWeight: "bold" };

const View = async ({ params }: any) => {
  const { view } = await params;
  const res = await viewAlbum(view);
  const album = get(res, "data", []);

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
              borderRadius: "18px",
              width: "332px",
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
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: "18px",
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

export default View;
