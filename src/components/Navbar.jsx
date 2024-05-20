import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Home, Inbox } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const navigate = useNavigate();

  const onViewForum = () => {
    navigate(`/All`);
  };
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSearchChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSearchClick = () => {
    navigate(`/search/${title}`);
    setTitle("");
  };

  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#3F826D" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: { xs: 300, md: 500 } }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              <ListItem
                key={"fora"}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <IconButton>
                  <img
                    src={logo}
                    alt="Fora"
                    style={{
                      height: "100px",
                    }}
                  />
                </IconButton>

                <Stack direction="column" sx={{ paddingTop: "15px" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#3F826D",
                      fontWeight: "bolder",
                      fontSize: { xs: "45px", md: "65px" },
                    }}
                  >
                    Fora
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#E2725B",
                      fontStyle: "italic",
                      fontSize: { xs: "12px", md: "22px" },
                    }}
                  >
                    Express your thoughts freely and anonymously
                  </Typography>
                </Stack>
              </ListItem>

              <Divider />
              <ListItem key={"home"} disablePadding>
                <NavLink to="/">
                  <Button
                    variant="text"
                    sx={{
                      marginLeft: "15px",
                      fontSize: { xs: "15px", md: "25px" },
                      color: "#3F826D",
                      "&:hover": {
                        color: "#FF725B",
                      },
                      textTransform: "none",
                    }}
                    startIcon={<Home sx={{ color: "#E2725B" }} />}
                  >
                    Home
                  </Button>
                </NavLink>
              </ListItem>
              <ListItem key={"create"} disablePadding>
                <NavLink to="/create-forum">
                  <Button
                    variant="text"
                    sx={{
                      marginLeft: "15px",
                      fontSize: { xs: "15px", md: "25px" },
                      color: "#3F826D",
                      "&:hover": {
                        color: "#FF725B",
                      },
                      textTransform: "none",
                    }}
                    startIcon={<Add sx={{ color: "#E2725B" }} />}
                  >
                    Create Forum
                  </Button>
                </NavLink>
              </ListItem>

              <ListItem key={"view"} disablePadding>
                <NavLink to="/All">
                  <Button
                    variant="text"
                    sx={{
                      marginLeft: "15px",
                      fontSize: { xs: "15px", md: "25px" },
                      color: "#3F826D",
                      "&:hover": {
                        color: "#FF725B",
                      },
                      textTransform: "none",
                    }}
                    startIcon={<ViewCarouselIcon sx={{ color: "#E2725B" }} />}
                  >
                    View All Forums
                  </Button>
                </NavLink>
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <NavLink to="/">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <IconButton>
                <img style={{ height: "55px" }} src={logo} alt="Fora" />
              </IconButton>

              <Typography
                variant="h5"
                sx={{
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                Fora
              </Typography>
            </Stack>
          </NavLink>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginLeft: "10px" }}
          >
            <Stack
              direction="row"
              sx={{
                borderRadius: "10px",
                padding: "5px",
                border: "2px solid #E2725B",
                width: { xs: "180px", md: "100%" },
              }}
            >
              <InputBase
                value={title}
                placeholder="Search Forum by Title"
                inputProps={{ "aria-label": "search" }}
                sx={{ fontSize: { xs: "15px", md: "20px" }, color: "#FFFFFF" }}
                onChange={handleSearchChange}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon onClick={handleSearchClick} />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
