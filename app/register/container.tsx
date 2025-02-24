"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Typography,
} from "@mui/material";
// import axios from 'axios'
import Link from "next/link";

export const Registration = () => {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    // const payload = {
    //     name,
    //     email,
    //     password
    // }
    // const result = await axios.post("http://localhost:1010/register", payload);
    // setMsg(result.data)
    // setName("");
    // setEmail("");
    // setPassword("");
  };

  useEffect(() => {
    if (msg !== "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        setMsg("");
      }, 5000);
    } else {
      setShow(false);
    }
  }, [msg]);
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

            <Button variant="contained" color="primary" fullWidth>
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
            <Button variant="contained" color="primary" fullWidth>
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
            <Button variant="contained" color="primary" fullWidth>
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
            <Button variant="contained" color="primary" fullWidth>
              Choose Plan
            </Button>
          </Card>
        </Grid>
      </Grid>

      <Card
        style={{
          width: "500px",
          height: "460px",
          padding: "24px",
          backgroundColor: "#d8ffff",
          borderRadius: "5px",
          marginLeft: "35%",
          marginTop: "160px",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 style={{ textAlign: "center" }}>Registration</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                size="small"
                label="Enter Your Name"
                type="text"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                size="small"
                label="Enter Your Email"
                type="text"
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                size="small"
                label="Enter Your Password"
                type="password"
                value={password}
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleClick}>
                Sign Up
              </Button>
            </Grid>

            <Grid item xs={12}>
              <p style={{ textAlign: "center" }}>
                Already have an account ?{" "}
                <b>
                  <Link href="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </b>
              </p>
            </Grid>
            {/* <Grid item xs={12}>
                { show && <Alert severity="success">{msg}</Alert> } 
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
      <Grid item xs={12}>
        {show && <Alert severity="success">{msg}</Alert>}
      </Grid>
    </React.Fragment>
  );
};
