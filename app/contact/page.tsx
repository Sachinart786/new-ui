import { Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import whatsapp from "../../public/whatapp.png";
import telegram from "../../public/telegram.png";
import email from "../../public/email.png";

const hover = {
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.3s ease",
  },
};

const Contact = () => {
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

        <Grid container item xs={12} spacing={10} justifyContent="center">
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image src={email} width={140} height={140} alt="Email Logo" />
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={facebook}
              width={140}
              height={140}
              alt="Facebook Logo"
            />
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image src={whatsapp} width={96} height={96} alt="WhatsApp Logo" />
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image src={telegram} width={82} height={82} alt="Telegram Logo" />
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={hover}
          >
            <Image
              src={instagram}
              width={100}
              height={100}
              alt="Instagram Logo"
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
            <CallIcon
              sx={{ color: "#40cae3", marginRight: "8px", marginTop: "4px" }}
            />{" "}
            +91 9908827608
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
