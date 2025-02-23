import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "4px",
        justifyContent: "space-between",
      }}
    >
      <Image
        src={logo}
        width={160}
        height={48}
        alt="logo"
        style={{ border: "none", background: "none" }}
      />

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          // aria-controls={menuId}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
    </div>
  );
};

export default Sidebar;
