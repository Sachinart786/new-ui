"use client";
import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import { createAccount } from "@/services/authServices";
import { get } from "lodash";

export const PageContainer = ({ price }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleClick = async () => {
    let valid = true;
    let nameError = "";
    let emailError = "";

    if (!name) {
      nameError = "Name is required";
      valid = false;
    }

    if (!email) {
      emailError = "Email is required";
      valid = false;
    } else if (!validateEmail(email)) {
      emailError = "Please enter a valid email address";
      valid = false;
    }

    setError({ name: nameError, email: emailError });

    if (valid) {
      const payload = {
        name,
        email,
        price,
      };
      const res = await createAccount(payload);
      if (get(res, "success", false)) {
        alert("Email Sent Successfully");
      }
    }
  };

  return (
    <div>
      <Grid container spacing={3} mt={6} p={4}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="#7681ab"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Get Your Membership
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            label="Enter Your Name"
            type="text"
            value={name}
            fullWidth
            onChange={(e) => setName(e.target.value)}
            error={Boolean(error.name)}
            helperText={error.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            label="Enter Your Email"
            type="text"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error.email)}
            helperText={error.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            label="Your Plan"
            type="text"
            value={price}
            disabled
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleClick}
          >
            Submit & Checkout
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="#7681ab"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Already have an account ?{" "}
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
