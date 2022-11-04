import { React, useState } from "react";
import {
  Box,
  Toolbar,
  AppBar,
  styled,
  Typography,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import Notifications from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import PetsIcon from "@mui/icons-material/Pets";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "0.5rem",
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <Box mb={1}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Navbar
          </Typography>
          <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search.." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://miro.medium.com/max/528/0*knUJcO8dDm6Lvfhw"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://miro.medium.com/max/528/0*knUJcO8dDm6Lvfhw"
              onClick={(e) => setOpen(true)}
            />
            Shubham
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}
