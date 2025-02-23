"use client";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "164px" }}>
      <h1
        style={{
          textAlign: "center",
          background:
            "linear-gradient(180deg, #a51bd5, #2c79c0 77.82%, #2cb7c0 97.74%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "moveUp 1s ease-out forwards",
        }}
      >
        Welcome to 90s Flac.in
        <p>Download High Quality Free Lossless Audio Codec</p>
      </h1>

      <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
        <Link href="/product" passHref>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              background: "linear-gradient(180deg,rgb(31, 228, 175), #6ee6b4)",
            }}
          >
            Browse Albums
          </Button>
        </Link>
      </Stack>

      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(100px); /* Start below the viewport */
            opacity: 0;
          }
          100% {
            transform: translateY(0); /* End at the top of the viewport */
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
