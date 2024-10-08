"use client";
import AssistantHome from "./AssistantHome";
import EmployerHome from "./EmployerHome";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { colors } from "../colors";

const HomePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log("local storage user", JSON.parse(storedUser));
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  return !user ? (
    <div>
      <CircularProgress disableShrink sx={{ color: colors.primary }} />
    </div>
  ) : user.role === "assistant" ? (
    <AssistantHome />
  ) : (
    <EmployerHome />
  );
};

export default HomePage;
