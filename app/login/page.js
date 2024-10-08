"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { colors } from "../colors";
import Image from "next/image";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const testUsers = [
    {
      name: "Test Employer",
      username: "testemployer",
      password: "test",
      role: "employer",
    },
    {
      name: "Test Assistant",
      username: "testassistant",
      password: "test",
      role: "assistant",
    },
  ];

  const login = () => {
    const foundUser = testUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      router.push("/home");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <Paper
        sx={{
          paddingTop: 6,
          paddingBottom: 6,
          paddingRight: 4,
          paddingLeft: 4,
          maxWidth: 300,
          width: "100%",
        }}
      >
        <Box
          sx={{
            paddingBottom: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src="/assets/logo.png" alt="Logo" width={110} height={110} />
          <Typography variant="h7" align="center" mb="0.5rem" mt="1rem">
            WELCOME TO SHIFT CALENDAR!
          </Typography>
        </Box>

        <Typography variant="h6" align="flex-start" mb="0.5rem">
          Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: colors.primary }}
          onClick={login}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
