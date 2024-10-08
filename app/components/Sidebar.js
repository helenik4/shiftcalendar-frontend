"use client";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { colors } from "../colors";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import HistoryIcon from "@mui/icons-material/History";
import ForumIcon from "@mui/icons-material/Forum";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [selectedPage, setSelectedPage] = useState("Home");

  const handleNavigation = (page) => {
    setSelectedPage(page);
    router.push(`/${page.toLowerCase().replace(" ", "-")}`);
  };

  const handleLogout = () => {
    localStorage.setItem("user", null);
    router.push("/login");
  };

  return (
    <Box
      sx={{
        width: 250,
        minWidth: 250,
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: colors.white,
        paddingLeft: 2,
        paddingRight: 2,
        position: "sticky",
        top: 0,
      }}
    >
      <Box sx={{ paddingTop: 6, paddingBottom: 6, textAlign: "center" }}>
        <Image src="/assets/logo.png" alt="Logo" width={110} height={110} />
      </Box>
      {storedUser && storedUser?.role === "assistant" ? (
        <List>
          <ListItem
            button
            onClick={() => handleNavigation("Home")}
            sx={{
              backgroundColor:
                selectedPage === "Home" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("My Employers")}
            sx={{
              backgroundColor:
                selectedPage === "My Employers" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Employers" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("Shift History")}
            sx={{
              backgroundColor:
                selectedPage === "Shift History" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Shift History" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("Messages")}
            sx={{
              backgroundColor:
                selectedPage === "Messages" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            button
            onClick={() => handleNavigation("Home")}
            sx={{
              backgroundColor:
                selectedPage === "Home" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("My Assistants")}
            sx={{
              backgroundColor:
                selectedPage === "My Assistants" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="My Assistants" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("Shift History")}
            sx={{
              backgroundColor:
                selectedPage === "Shift History" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Shift History" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation("Messages")}
            sx={{
              backgroundColor:
                selectedPage === "Messages" ? colors.accent : colors.white,
              borderRadius: 2,
              marginBottom: 2,
              cursor: "pointer",
            }}
          >
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </List>
      )}
      <Button
        variant="contained"
        onClick={handleLogout}
        sx={{
          backgroundColor: colors.primary,
          position: "absolute",
          bottom: 20,
          fontSize: "0.7rem",
          padding: "8px 20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
