import { Grid, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import whatsapp from "../../public/whatapp.png";
import telegram from "../../public/telegram.png";
import email from "../../public/email.png";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <Grid container spacing={3} justifyContent="center" mt={{ sm: 4, md: 6 }}>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: { xs: "18px", sm: "21px" }, // Adjust font size based on screen size
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
          >
            <Link
              href="https://t.me/+MFJDTgkzMoQwODJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={email} width={128} height={128} alt="Email Logo" />
            </Link>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://t.me/+MFJDTgkzMoQwODJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                width={128} height={128}
                alt="Facebook Logo"
              />
            </Link>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://wa.me/919908827608"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={whatsapp}
                width={86} height={86}
                alt="WhatsApp Logo"
              />
            </Link>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://t.me/+MFJDTgkzMoQwODJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={telegram}
                width={72} height={72}
                alt="Telegram Logo"
              />
            </Link>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://t.me/+MFJDTgkzMoQwODJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                width={90} height={90}
                alt="Instagram Logo"
              />
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="#323c64"
            sx={{
              fontSize: { xs: "14px", sm: "17px" }, // Adjust phone vs tablet font sizes
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
