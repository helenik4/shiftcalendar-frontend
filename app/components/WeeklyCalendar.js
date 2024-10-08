"use client";
import React, { useState } from "react";
import {
  addDays,
  subWeeks,
  addWeeks,
  startOfWeek,
  eachDayOfInterval,
  format,
  isSameDay,
} from "date-fns";
import {
  Box,
  Button,
  Typography,
  Grid2,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { colors } from "../colors";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const hoursInDay = Array.from({ length: 24 }, (_, i) => `${i}:00`);

const WeeklyCalendar = ({
  shifts,
  calendarHeight,
  allowShiftClicking,
  openShiftDetails,
  title,
  allowShiftsFiltering,
}) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const [shiftsFilter, setShiftsFilter] = useState("all");

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = addDays(startOfCurrentWeek, 6);

  const weekDays = eachDayOfInterval({
    start: startOfCurrentWeek,
    end: endOfCurrentWeek,
  });

  const moveToNextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const moveToPreviousWeek = () => setCurrentDate(subWeeks(currentDate, 1));

  const getShiftsForDay = (day) => {
    return shifts.filter((shift) => isSameDay(day, shift.startDate));
  };

  const calculateShiftPosition = (shift) => {
    const startHour = shift.startDate.getHours();
    const startMinutes = shift.startDate.getMinutes();
    const endHour = shift.endDate.getHours();
    const endMinutes = shift.endDate.getMinutes();

    const topPosition = (startHour - 8) * 80 + (startMinutes / 60) * 80;
    const shiftHeight =
      (endHour - startHour) * 80 + ((endMinutes - startMinutes) / 60) * 80;

    return { topPosition, shiftHeight };
  };

  const onRequestedShiftsFiltering = (event, newFilter) => {
    setShiftsFilter(newFilter);
  };

  const getShiftStatusColor = (status) => {
    switch (status) {
      case "done":
        return colors.doneShift;
      case "accepted":
        return colors.acceptedShift;
      case "waitingForAssistant":
        return colors.waitingForAssistantShift;
      default:
        return "#9E9E9E";
    }
  };

  const getShiftStatusIcon = (status) => {
    switch (status) {
      case "done":
        return (
          <DoneAllIcon
            fontSize="small"
            sx={{ color: "#427E5C", marginRight: "4px" }}
          />
        );
      case "accepted":
        return (
          <PersonAddIcon
            fontSize="small"
            sx={{ color: "#3E6277", marginRight: "4px" }}
          />
        );
      case "waitingForAssistant":
        return (
          <PersonSearchIcon
            fontSize="small"
            sx={{ color: "#E89433", marginRight: "4px" }}
          />
        );
      default:
        return "";
    }
  };

  const getShiftStatusLabel = (status) => {
    switch (status) {
      case "done":
        return "done";
      case "accepted":
        return "accepted";
      case "waitingForAssistant":
        return "waiting for assistant";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mb: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: colors.black }}>{title}</h2>
          {allowShiftsFiltering && (
            <ToggleButtonGroup
              value={shiftsFilter}
              exclusive
              onChange={onRequestedShiftsFiltering}
            >
              <ToggleButton
                value="all"
                sx={{
                  fontSize: "0.7rem",
                  padding: "8px 20px",
                  "&.Mui-selected": {
                    backgroundColor: colors.primary,
                    color: colors.white,
                  },
                  "&:not(.Mui-selected)": {
                    backgroundColor: colors.white,
                    color: colors.black,
                  },
                }}
              >
                All free shifts
              </ToggleButton>
              <ToggleButton
                value="own"
                sx={{
                  fontSize: "0.7rem",
                  padding: "8px 20px",
                  "&.Mui-selected": {
                    backgroundColor: colors.primary,
                    color: colors.white,
                  },
                  "&:not(.Mui-selected)": {
                    backgroundColor: colors.white,
                    color: colors.black,
                  },
                }}
              >
                My employer's shifts
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={moveToPreviousWeek}
            sx={{
              backgroundColor: colors.white,
              color: colors.black,
              fontSize: "0.7rem",
              padding: "8px 20px",
            }}
            startIcon={<ArrowBackIosIcon />}
          >
            Previous Week
          </Button>
          <Box
            sx={{
              mx: 1,
              p: 1,
              backgroundColor: colors.white,
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: colors.black, fontSize: "0.9rem" }}
            >
              {format(startOfCurrentWeek, "MMM d, yyyy")} -{" "}
              {format(endOfCurrentWeek, "MMM d, yyyy")}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={moveToNextWeek}
            sx={{
              backgroundColor: colors.white,
              color: colors.black,
              fontSize: "0.7rem",
              padding: "8px 20px",
            }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Next Week
          </Button>
        </Box>
      </Box>

      <Paper
        elevation={0}
        sx={{
          backgroundColor: colors.secondary,
          position: "sticky",
        }}
      >
        <Grid2 container sx={{ width: "100%" }}>
          <Box
            sx={{
              height: "50px",
              width: "50px",
            }}
          ></Box>
          {weekDays.map((day) => (
            <Grid2
              item
              xs={1}
              key={day}
              sx={{
                textAlign: "center",
                color: colors.black,
                py: 1,
                width: "7rem",
              }}
            >
              <Typography variant="subtitle1">{format(day, "EEEE")}</Typography>
              <Typography variant="body2">{format(day, "d")}</Typography>
            </Grid2>
          ))}
        </Grid2>
      </Paper>

      <Box sx={{ maxHeight: calendarHeight, overflowY: "auto" }}>
        <Grid2 container sx={{ width: "100%" }}>
          <Grid2 item xs={1.7}>
            <Paper
              elevation={0}
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box sx={{ backgroundColor: colors.white }}>
                {hoursInDay.slice(8).map(
                  (
                    hour 
                  ) => (
                    <Box
                      key={hour}
                      sx={{
                        borderBottom: "1px solid #f0f0f0",
                        height: "80px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        color: "#888",
                      }}
                    >
                      <Typography variant="caption">{hour}</Typography>
                    </Box>
                  )
                )}
              </Box>
            </Paper>
          </Grid2>

          {weekDays.map((day) => (
            <Grid2
              item
              xs={1.7}
              key={day}
              sx={{ minWidth: "7rem", position: "relative" }}
            >
              <Paper elevation={0}>
                <Box>
                  {hoursInDay.slice(8).map((hour) => (
                    <Box
                      key={hour}
                      sx={{
                        backgroundColor: isSameDay(day, today)
                          ? "#fcfcfc"
                          : colors.white,
                        borderBottom: "1px solid #f0f0f0",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    ></Box>
                  ))}
                </Box>

                {getShiftsForDay(day).map((shift) => {
                  const { topPosition, shiftHeight } =
                    calculateShiftPosition(shift);
                  const statusColor = getShiftStatusColor(shift.status);
                  return (
                    <Box
                      onClick={() =>
                        allowShiftClicking && openShiftDetails(shift)
                      }
                      key={shift.title}
                      sx={{
                        position: "absolute",
                        top: topPosition,
                        left: "0",
                        right: "0",
                        height: shiftHeight,
                        backgroundColor: statusColor,
                        padding: "8px",
                        marginLeft: "2px",
                        marginRight: "2px",
                        boxSizing: "border-box",
                        zIndex: 1,
                        cursor: "pointer",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: "bold", mb: 1 }}
                      >
                        {shift.title}
                      </Typography>{" "}
                      <Typography variant="caption">
                        {format(shift.startDate, "p")} -{" "}
                        {format(shift.endDate, "p")}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        {getShiftStatusIcon(shift.status)}
                        <Typography variant="caption">
                          {getShiftStatusLabel(shift.status)}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default WeeklyCalendar;
