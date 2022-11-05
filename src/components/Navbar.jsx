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
  const [open, setOpen] = useState(false); //manage open state for profile menu

  const StyledToolbar = styled(Toolbar)({
    //custom Toolbar to adjust items with even space between items
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")({
    // custom Serachbar by modifying div
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "0.5rem",
    width: "40%",
  });

  const Icons = styled(Box)(({ theme }) => ({
    // custom Box that displays when the width of screen is more than sm - 600px
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    // custom Box that displays when the width of screen is less than sm - 600px
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      {/* AppBar is set to sticky enabling other components to be properly visible */}
      <StyledToolbar>
        {/* We could have written a normal toolbar here but we needed it to have space between the elements 
          so, we created a styled toolbar */}
        <Typography // disabled the  written Navbar when the screen size is small and set to Paws icon
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          AnimeBook
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />{" "}
        {/* paws icon will be visible on small screen size */}
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        {/* Created Icons for mail, notifications and avatar */}
        <Icons>
          <Badge badgeContent={3} color="error">
            {" "}
            {/* Using badgeContent provided count of notification */}
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          {/* First Avatar will be just the icon on wider screens */}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://miro.medium.com/max/528/0*knUJcO8dDm6Lvfhw"
            onClick={(e) =>
              setOpen(true)
            } /* onClick the profile menu will open */
          />
        </Icons>
        <UserBox>
          {/* Second Avatar will be the icon with name on smaller screens */}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://miro.medium.com/max/528/0*knUJcO8dDm6Lvfhw"
            onClick={(e) => setOpen(true)}
          />
          Shubham
        </UserBox>
      </StyledToolbar>
      {/* Adding menu to the avatar icon */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} // onClick setting the menu to be open
        onClose={(e) => setOpen(false)} // onClose menu will disappperar
        anchorOrigin={{
          // set the anchor origin to top right of the screen
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Items in the Menu dropdown */}
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
