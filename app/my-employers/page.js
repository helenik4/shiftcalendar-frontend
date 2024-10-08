"use client";
import React from "react";
import {
  Box,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { colors } from "../colors";

const MyEmployersPage = () => {
  const employersArray = [
    {
      name: "Example Employer 1",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 2",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 3",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 4",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 5",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 6",
      details: "Employer details text text text",
      photo: "",
    },
    {
      name: "Example Employer 7",
      details: "Employer details text text text",
      photo: "",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>My Employers</h2>
      <Paper elevation={3} sx={{ width: "50vw" }}>
        <List
          sx={{
            backgroundColor: colors.secondary,
          }}
        >
          <ListItem>
            <ListItemText primary={<></>} sx={{ flex: 1 }} />
            <ListItemText
              sx={{ flex: 4 }}
              primary={
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Name
                </Typography>
              }
            />
            <ListItemText
              sx={{ flex: 4 }}
              primary={
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  Details
                </Typography>
              }
            />
          </ListItem>
        </List>

        <List sx={{ paddingTop: 0 }}>
          {employersArray.map((employer, index) => (
            <ListItem
              key={employer.name}
              sx={{
                backgroundColor: index % 2 === 0 ? colors.white : "#f1f1f1",
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <ListItemAvatar sx={{ flex: 1 }}>
                <Avatar
                  alt={employer.name}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{ flex: 4 }}
                primary={
                  <Typography variant="body1">{employer.name}</Typography>
                }
              />
              <ListItemText
                sx={{ flex: 4 }}
                primary={
                  <Typography variant="body2">{employer.details}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default MyEmployersPage;