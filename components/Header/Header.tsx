import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <IconButton sx={{ mr: 2, display: { sm: "none" } }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div">
        Test App
      </Typography>

      <Box>
        <Button LinkComponent={Link} href="/">
          Home
        </Button>
        <Button LinkComponent={Link} href="/news">
          News
        </Button>
        <Button LinkComponent={Link} href="/new-post">
          Create
        </Button>
      </Box>
    </Box>
  );
};
