"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import Link from "next/link";
// import axios from 'axios';

export const Login = () => {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    // const payload = {
    //     email,
    //     password
    // }
    // const result = await axios.post("http://localhost:1010/login", payload);
    // setMsg(result.data.message)
    // // alert(result.data.message)
    // setUser(result.data.user)
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
      <Card
        style={{
          width: "500px",
          height: "360px",
          padding: "24px",
          backgroundColor: "#d8ffff",
          borderRadius: "5px",
          marginLeft: "35%",
          marginTop: "200px",
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
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <p style={{ textAlign: "center" }}>
                Dont have an account ?{" "}
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
      <Grid item xs={12}>
        {show && <Alert severity="success">{msg}</Alert>}
      </Grid>
    </React.Fragment>
  );
};
