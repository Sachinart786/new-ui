import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { searchAlbum } from "@/services/albumServices";
import Link from "next/link";

const menuStyle = {
  paddingLeft: "18px",
  "&:hover": {
    backgroundColor: "#e0f2f1",
  },
  fontSize: "13px",
  fontWeight: "bold",
};

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
      <Image
        src={logo}
        width={160}
        height={44}
        alt="logo"
        style={{ border: "none", background: "none" }}
      />

      <Box>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleMenuClick}
          color="info"
        >
          <MenuRoundedIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiMenu-paper": {
              borderRadius: "5px",
              padding: "16px",
              minWidth: "250px",
            },
          }}
        >
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                flexGrow: 1,
                backgroundColor: "#e0f2f1",
                borderRadius: "8px",
                marginRight: 1,
              }}
            />
            <IconButton onClick={handleSearch}>
              <SearchOutlinedIcon sx={{ color: "#00796b" }} />
            </IconButton>
          </MenuItem>

          <Divider sx={{ margin: "8px 0" }} />

          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#323c64",
              marginBottom: 0.5,
              marginLeft: 2,
            }}
          >
            Menu
          </Typography>

          {/* <MenuItem
            onClick={handleMenuClose}
            sx={{
              paddingLeft: "32px",
              "&:hover": {
                backgroundColor: "#e0f2f1",
              },
            }}
          >
            Music Director
          </MenuItem> */}

          <Link
            href="/register"
            style={{ textDecoration: "none", color: "#7681ab" }}
          >
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                ...menuStyle,
                padding: { xs: "8px 16px", sm: "12px 16px" },
              }}
            >
              REGISTER
            </MenuItem>
          </Link>
          <Link
            href="/account"
            style={{ textDecoration: "none", color: "#7681ab" }}
          >
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                ...menuStyle,
                padding: { xs: "8px 16px", sm: "12px 16px" },
              }}
            >
              ACCOUNT
            </MenuItem>
          </Link>
          <Link
            href="/contact"
            style={{ textDecoration: "none", color: "#7681ab" }}
          >
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                ...menuStyle,
                padding: { xs: "8px 16px", sm: "12px 16px" },
              }}
            >
              CONTACT US
            </MenuItem>
          </Link>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              ...menuStyle,
              padding: { xs: "8px 16px", sm: "12px 16px" },
              color: "#7681ab"
            }}
          >
            LOGOUT
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default Sidebar;
