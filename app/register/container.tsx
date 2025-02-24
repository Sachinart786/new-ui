"use client";
import React from "react";
import { Grid, Card, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Registration = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register/signup");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3} justifyContent="center" mt={10}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            Choose Your Plans
          </Typography>
        </Grid>

        {/* Card for Plan 1: ₹599 for 1 month */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              padding: "24px",
              backgroundColor: "#f4f7f6", // Soft background color
              borderRadius: "12px", // Rounded corners
              textAlign: "center",
              boxShadow: 3, // Subtle shadow for depth
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom effect on hover
                boxShadow: 6, // More prominent shadow on hover
              },
              transition: "all 0.3s ease", // Smooth transition
            }}
          >
            <Typography variant="h5" color="primary" fontWeight="bold">
              ₹599
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              For 1 Month
            </Typography>

            <Typography variant="body2" color="textSecondary">
              Rare CD Realease.
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Access all content to site.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

        {/* Card for Plan 2: ₹1599 for 3 months */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              padding: "24px",
              backgroundColor: "#f4f7f6",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="h5" color="primary" fontWeight="bold">
              ₹1599
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              For 3 Months
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rare CD Realease.
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Access all content to site.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

        {/* Card for Plan 3: ₹2599 for 6 months */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              padding: "24px",
              backgroundColor: "#f4f7f6",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="h5" color="primary" fontWeight="bold">
              ₹2599
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              For 6 Months
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rare CD Realease.
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Access all content to site.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

        {/* Card for Plan 4: ₹4999 for 1 Year */}
        <Grid item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <Card
            sx={{
              width: "100%",
              padding: "24px",
              backgroundColor: "#f4f7f6",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: 3,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
              transition: "all 0.3s ease",
            }}
          >
            <Typography variant="h5" color="primary" fontWeight="bold">
              ₹4999
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              For 1 Year
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rare CD Realease.
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={2}>
              Access all content to site.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
