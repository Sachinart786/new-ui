"use client";
import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { Login } from "@/services/authServices";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { get } from "lodash";
import { useRouter } from "next/navigation";

export const LoginContainer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const payload = {
      email,
      password,
    };
    try {
      const res = await Login(payload);
      if (get(res, "success", false)) {
        const token = get(res, "token", "");
        setCookie("token", token);
        setTimeout(() => {
          router.push("/");
        }, 0);
        alert("Login Successfully");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <Grid container spacing={3} mt={6} p={4}>
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
            Login
          </Typography>
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
            autoFocus
            aria-label="Email address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            label="Enter Your Password"
            type="password"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleClick}
          >
            Login
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
            Don’t have an account?{" "}
            <Link
              href="/register"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
