"use client";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { colors } from "../colors";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import { useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: colors.primary }}>
      <Toolbar sx={{ justifyContent: "flex-end", alignItems: "center" }}>
        <IconButton
          //onClick={}
          sx={{
            backgroundColor: colors.black,
            color: colors.accent,
            borderRadius: "50%",
            marginRight: 2,
            width: "12px",
            height: "12px",
          }}
        >
          <HelpIcon />
        </IconButton>
        <Button
          //onClick={}
          variant="contained"
          sx={{
            backgroundColor: colors.accent,
            color: colors.black,
            fontSize: "0.7rem",
            padding: "8px 20px",
            alignSelf: "center",
          }}
          startIcon={<PersonIcon />}
        >
          Firstname Lastname
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
