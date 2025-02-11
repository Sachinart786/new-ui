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
              <h2 style={{textAlign: "center"}}>Registration</h2>
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
                <p style={{textAlign: "center"}}>Already have an account ? <b><Link href="/login" style={{textDecoration: "none"}}>Login</Link></b></p>
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
