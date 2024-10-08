"use client";
import React, { useState } from "react";
import {
  Box,
  Grid2,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import WeeklyCalendar from "../components/WeeklyCalendar";
import { colors } from "../colors";
import {
  format,
} from "date-fns";

const AssistantHome = () => {
  const acceptedAndDoneShiftsArray = [
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-07T14:00:00"),
      endDate: new Date("2024-10-07T17:00:00"),
      status: "done",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-08T10:00:00"),
      endDate: new Date("2024-10-08T14:00:00"),
      status: "done",
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
      startDate: new Date("2024-10-10T09:00:00"),
      endDate: new Date("2024-10-10T11:00:00"),
      status: "accepted",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-12T10:00:00"),
      endDate: new Date("2024-10-12T11:45:00"),
      status: "accepted",
      details: "",
    },
  ];

  const requestedShiftsArray = [
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-10T11:00:00"),
      endDate: new Date("2024-10-10T15:00:00"),
      status: "waitingForAssistant",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-11T09:30:00"),
      endDate: new Date("2024-10-11T12:00:00"),
      status: "waitingForAssistant",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-10T16:00:00"),
      endDate: new Date("2024-10-10T18:30:00"),
      status: "waitingForAssistant",
      details: "",
    },
    {
      title: "Example title",
      employer: "Firstname Lastname",
      address: "Example Street 10",
      startDate: new Date("2024-10-12T10:00:00"),
      endDate: new Date("2024-10-12T14:00:00"),
      status: "waitingForAssistant",
      details: "",
    },
  ];

  const [acceptedAndDoneShifts, setAcceptedAndDoneShifts] = useState(
    acceptedAndDoneShiftsArray
  );
  const [requestedShifts, setRequestedShifts] = useState(requestedShiftsArray);
  const [isShiftDetailsVisible, setIsShiftDetailsVisible] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);

  const acceptShiftClick = () => {

    setRequestedShifts(requestedShifts.filter(shift => shift !== selectedShift));
    const acceptedShift = {
      title: selectedShift.title,
      employer: selectedShift.employer,
      address: selectedShift.address,
      startDate: selectedShift.startDate,
      endDate: selectedShift.endDate,
      status: "accepted", 
      details: selectedShift.details,
    };
    setAcceptedAndDoneShifts([...acceptedAndDoneShifts, acceptedShift]);

    setSelectedShift(null);
    setIsShiftDetailsVisible(false);
  };

  const closeShiftDetails = () => {
    setSelectedShift(null);
    setIsShiftDetailsVisible(false);
  };

  const onShiftClick = (shift) => {
    setSelectedShift(shift);
    setIsShiftDetailsVisible(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={7} sm={7} md={7} lg={9} xl={9}>
          <WeeklyCalendar
            shifts={acceptedAndDoneShifts}
            calendarHeight="40vh"
            allowShiftClicking={false}
            title="My Accepted Shifts"
            allowShiftsFiltering={false}
          />
        </Grid2>
        <Grid2 item xs={7} sm={7} md={7} lg={9} xl={9}></Grid2>
      </Grid2>
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        <Grid2 item xs={7} sm={7} md={7} lg={9} xl={9}>
          <WeeklyCalendar
            shifts={requestedShifts}
            calendarHeight="40vh"
            allowShiftClicking={true}
            openShiftDetails={onShiftClick}
            title="Requested Shifts"
            allowShiftsFiltering={true}
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
          {isShiftDetailsVisible && (
            <Paper elevation={3} sx={{ padding: 2, maxWidth: "20rem" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                  {selectedShift.title}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold", mt: 1.5 }}>
                  Employer
                </Typography>
                <Typography variant="caption">
                  {selectedShift.employer}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold", mt: 1.5 }}>
                  Date and time
                </Typography>
                <Typography variant="caption">
                  {format(selectedShift.startDate, "p")} - {format(selectedShift.endDate, "p")}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold", mt: 1.5 }}>
                  Address
                </Typography>
                <Typography variant="caption">
                  {selectedShift.address}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "bold", mt: 1.5 }}>
                  Details
                </Typography>
                <Typography variant="caption">
                  {selectedShift.details !== "" ? selectedShift.details : "-"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={acceptShiftClick}
                  sx={{
                    marginRight: 2,
                    backgroundColor: colors.primary,
                    color: colors.white,
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  onClick={closeShiftDetails}
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

export default AssistantHome;
