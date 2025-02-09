// "use client";
// import React, { useState } from "react";
// import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
// import { useNotifications } from "@toolpad/core";
// import { Login } from "@/services/authServices";
// import { setCookie } from "cookies-next";
// import Link from "next/link";
// import { get } from "lodash";
// import { useRouter } from "next/navigation";
// import { showSuccess } from "@/utils";

// export const LoginContainer = () => {
//   const router = useRouter();
//   const toaster = useNotifications();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleClick = async () => {
//     const payload = {
//       email,
//       password,
//     };
//     const res = await Login(payload);
//     if (get(res, "success", false)) {
//       showSuccess(toaster, "Login Successfully");
//       const token = get(res, "token", "");
//       setCookie("token", token);
//       router.push("/");
//     }
//   };

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to right, #80dde0, #92fcaf)",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Card
//         style={{
//           width: "340px",
//           padding: "15px",
//           borderRadius: "5px",
//         }}
//       >
//         <CardContent>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <h2 style={{ textAlign: "center" }}>Login</h2>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="filled"
//                 size="small"
//                 label="Enter Your Email"
//                 type="text"
//                 value={email}
//                 fullWidth
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="filled"
//                 size="small"
//                 label="Enter Your Password"
//                 type="password"
//                 value={password}
//                 fullWidth
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" fullWidth onClick={handleClick}>
//                 Login
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <p style={{ textAlign: "center" }}>
//                 Dont have an account ?{" "}
//                 <b>
//                   <Link href="register" style={{ textDecoration: "none" }}>
//                     Sign Up
//                   </Link>
//                 </b>
//               </p>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
// import { useNotifications } from "@toolpad/core/useNotifications";
import { Login } from "@/services/authServices";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { get } from "lodash";
import { useRouter } from "next/navigation";
// import { showSuccess, showError } from "@/utils";

export const LoginContainer = () => {
  const router = useRouter();
  // const toaster = useNotifications();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // loading state to disable button and show spinner

  const handleClick = async () => {
    const payload = {
      email,
      password,
    };
    setLoading(true);

    try {
      const res = await Login(payload);
      if (get(res, "success", false)) {
        // showSuccess(toaster, "Login Successfully");
        const token = get(res, "token", "");
        setCookie("token", token);
        router.push("/");
      } else {
        console.log("Login error");
        // showError(toaster, "Login failed. Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // showError(toaster, "An error occurred. Please try again later.");
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
