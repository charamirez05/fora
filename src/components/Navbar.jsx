import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";

const Navbar = () => {
  const navigate = useNavigate();

  const onViewForum = () => {
    navigate(`/viewForums/All`);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ bgcolor: "#3F826D" }}>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <Stack direction="row">
                <IconButton>
                  <img style={{ height: "55px" }} src={logo} alt="Fora" />
                </IconButton>
                <Stack direction="column">
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "30px", fontWeight: "bolder" }}
                  >
                    Fora
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Express your thoughts freely and anonymously
                  </Typography>
                </Stack>
              </Stack>
            </NavLink>
          </Box>

          <Stack direction="row" spacing={2}>
            <NavLink to="/createNewForum">
              <Button
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#E2725B",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  textTransform: "none",
                  height: '40px',
                  padding: '15px',
                  "&:hover": {
                    bgcolor: "#FF725B",
                  },
                }}
                startIcon={<Add />}
              >
                Create Forum
              </Button>
            </NavLink>
            
          
              <Button
                variant="contained"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#E2725B",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  textTransform: "none",
                  height: '40px',
                  padding: '15px',
                  "&:hover": {
                    bgcolor: "#FF725B",
                  },
                }}
                onClick={onViewForum}
              >
                View All Forums
              </Button>
          

            <Stack direction="row">
              <form>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  style={{
                    width: "100%",
                    border: "3px solid #E2725B",
                    fontWeight: "bold",
                    padding: "5px",
                  }}
                />
              </form>
              <button
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#E2725B",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => onViewForum("All")}
              >
                Search
              </button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      {/*  <nav
        style={{
          background: "#3F826D",
          border: "bold",
          borderColor: "#3F826D",
          color: "#FFFFFF",
        }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img style={{ height: "55px" }} src={logo} alt="Fora" />
                <div>
                  <span
                    style={{
                      display: "block",
                      color: "#FFFFFF",
                      fontSize: "30px",
                      fontWeight: "bolder",
                      marginLeft: "10px",
                    }}
                    className="  text-white text-2xl font-bold ml-2"
                  >
                    Fora
                  </span>

                  <p
                    style={{
                      display: "block",
                      color: "#FFFFFF",
                      fontSize: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    Express your thoughts freely and anonymously
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
