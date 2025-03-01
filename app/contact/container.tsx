"use client";
import { Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { useRouter } from "next/navigation";
import Image from "next/image";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import whatsapp from "../../public/whatsapp.jpg";
import telegram from "../../public/telegram.png";
import email from "../../public/email.png";

const hover = {
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.3s ease",
  },
};

export const PageContainer = () => {
  const router = useRouter();

  const handleClick = (plan: number) => {
    router.push(`/register/membership/${plan}`);
  };

  return (
    <div>
      <Grid container spacing={3} justifyContent="center" mt={{ sm: 4, md: 6 }}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: "21px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
        </Grid>

        {/* Grid for Images in a Single Row */}
        <Grid container item xs={12} spacing={3} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={instagram}
              width={220}
              height={220}
              alt="Instagram Logo"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={facebook}
              width={300}
              height={300}
              alt="Facebook Logo"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image src={email} width={300} height={300} alt="Email Logo" />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={whatsapp}
              width={160}
              height={160}
              alt="WhatsApp Logo"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={telegram}
              width={170}
              height={170}
              alt="Telegram Logo"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: "17px",
              fontWeight: "bold",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CallIcon sx={{ color: "#40cae3", marginRight: "8px", marginTop: "4px" }} /> +91
            9908827608
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
