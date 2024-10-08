"use client";
import React, { useState } from "react";
import {
  Box,
  Grid2,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import WeeklyCalendar from "../components/WeeklyCalendar";
import { colors } from "../colors";
import AddIcon from '@mui/icons-material/Add';

const EmployerHome = () => {
  const shiftsArray = [
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-02T14:00:00"),
      endDate: new Date("2024-10-02T17:00:00"),
      status: "done",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-05T10:00:00"),
      endDate: new Date("2024-10-05T14:00:00"),
      status: "accepted",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-09-25T09:00:00"),
      endDate: new Date("2024-09-25T12:00:00"),
      status: "done",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-09-27T11:00:00"),
      endDate: new Date("2024-09-27T15:00:00"),
      status: "done",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-03T10:00:00"),
      endDate: new Date("2024-10-03T12:00:00"),
      status: "done",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-11T10:00:00"),
      endDate: new Date("2024-10-11T12:00:00"),
      status: "waitingForAssistant",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-10T09:00:00"),
      endDate: new Date("2024-10-10T10:30:00"),
      status: "waitingForAssistant",
      details: "",
    },
  ];

  const [shifts, setShifts] = useState(shiftsArray);

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [details, setDetails] = useState("");

  const handleAddShift = () => {
    const newShift = {
      title,
      address,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: "waitingForAssistant",
      details,
    };

    setShifts([...shifts, newShift]);
    resetForm();
    setIsShiftFormVisible(false); 
  };

  const resetForm = () => {
    setTitle("");
    setAddress("");
    setStartDate("");
    setEndDate("");
    setDetails("");
  };

  const [isShiftFormVisible, setIsShiftFormVisible] = useState(false);

  const handleAddShiftClick = () => {
    setIsShiftFormVisible(true);
  };

  const handleCloseShiftForm = () => {
    setIsShiftFormVisible(false);
    resetForm();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={7} sm={7} md={7} lg={9} xl={9}>
          <WeeklyCalendar
            shifts={shifts}
            calendarHeight="70vh"
            allowShiftClicking={false}
            title="Shift Calendar"
            allowShiftsFiltering={false}
          />
        </Grid2>

        <Grid2
          item
          xs={4}
          sm={4}
          md={4}
          lg={3}
          xl={3}
          sx={{ marginTop: "3.3rem" }}
        >
          {!isShiftFormVisible ? (
            <Button
              variant="contained"
              onClick={handleAddShiftClick}
              sx={{
                width: "100%",
                backgroundColor: colors.primary,
                color: colors.white,
                fontSize: "0.7rem",
                padding: "8px 20px",
              }}
              startIcon={<AddIcon />}
            >
              Add Shift request
            </Button>
          ) : (
            <Paper elevation={3} sx={{ padding: 2, maxWidth: "20rem" }}>
              <Typography variant="h7">Add shift request</Typography>
              <TextField
                label="Shift Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                sx={{ mb: 2, mt: 2 }}
              />
              <TextField
                label="Start Date"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="End Date"
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  color={colors.primary}
                  onClick={handleAddShift}
                  sx={{
                    marginRight: 2,
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseShiftForm}
                  sx={{
                    backgroundColor: colors.secondary,
                    color: colors.black,
                  }}
                >
                  Close
                </Button>
              </Box>
            </Paper>
          )}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default EmployerHome;
