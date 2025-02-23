"use client";
import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import { Login } from "@/services/authServices";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { get } from "lodash";
import { useRouter } from "next/navigation";

export const LoginContainer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const payload = {
      email,
      password,
    };
    setLoading(true);

    try {
      const res = await Login(payload);
      if (get(res, "success", false)) {
        const token = get(res, "token", "");
        setCookie("token", token);
        setTimeout(() => {
          router.push("/");
        }, 0);
        // showSuccess(toaster, "Login Successfully");
        // showSuccess("Login Successfully");
      } else {
        // showError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #80dde0, #92fcaf)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "340px",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h2 style={{ textAlign: "center" }}>Login</h2>
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
                autoFocus
                aria-label="Email address"
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
                aria-label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                size="medium"
                fullWidth
                onClick={handleClick}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size="sm" variant="solid" />
                ) : (
                  "Login"
                )}
              </Button>
              {/* <Button loading={loading} onClick={handleClick} variant="solid" size="lg" fullWidth>
              Login
              </Button> */}
            </Grid>
            <Grid item xs={12}>
              <p style={{ textAlign: "center" }}>
                Don’t have an account?{" "}
                <b>
                  <Link href="register" style={{ textDecoration: "none" }}>
                    Sign Up
                  </Link>
                </b>
              </p>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
