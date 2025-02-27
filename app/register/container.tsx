"use client";
import React from "react";
import { Grid, Card, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Registration = () => {
  const router = useRouter();

  const handleClick = (plan: number) => {
    router.push(`/register/membership/${plan}`);
  };
  return (
    <div>
      <Grid container spacing={3} justifyContent="center" mt={{ sm: 5, md: 10 }}>
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
              onClick={() => handleClick(599)}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

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
              onClick={() => handleClick(1599)}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

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
              onClick={() => handleClick(2599)}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>

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
              onClick={() => handleClick(4999)}
              fullWidth
            >
              Choose Plan
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
