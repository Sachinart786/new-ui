import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { searchAlbum } from "@/services/albumServices";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [name, setName] = useState<string>("");

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = async () => {
    const res = await searchAlbum(name);
    console.log(res);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "8px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Image
        src={logo}
        width={160}
        height={44}
        alt="logo"
        style={{ border: "none", background: "none" }}
      />

      {/* <input
        placeholder="Search..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button variant="outlined" color="primary" onClick={handleSearch}>
        Search
      </Button> */}

      {/* Account Circle Icon */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleMenuClick}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Sidebar;