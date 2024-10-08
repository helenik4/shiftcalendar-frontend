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

const MyAssistantsPage = () => {
  const assistantsArray = [
    {
      name: "Example Assistant 1",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 2",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 3",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 4",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 5",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 6",
      details: "Assistant details text text text",
      photo: "",
    },
    {
      name: "Example Assistant 7",
      details: "Assistant details text text text",
      photo: "",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>My Assistants</h2>
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
          {assistantsArray.map((assistant, index) => (
            <ListItem
              key={assistant.name}
              sx={{
                backgroundColor: index % 2 === 0 ? colors.white : "#f1f1f1",
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <ListItemAvatar sx={{ flex: 1 }}>
                <Avatar alt={assistant.name} />
              </ListItemAvatar>
              <ListItemText
                sx={{ flex: 4 }}
                primary={
                  <Typography variant="body1">{assistant.name}</Typography>
                }
              />
              <ListItemText
                sx={{ flex: 4 }}
                primary={
                  <Typography variant="body2">{assistant.details}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default MyAssistantsPage;
