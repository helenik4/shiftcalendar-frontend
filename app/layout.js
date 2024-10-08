import "./styles/globals.css";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";

export const metadata = {
  title: "ShiftCalendar",
  description: "ShiftCalendar",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <Box sx={{ display: "flex", backgroundColor: "#F0F0F0" }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
              <TopBar />
              <Box component="main" sx={{ p: 3 }}>
                {children}
              </Box>
            </Box>
          </Box>
      </body>
    </html>
  );
};

export default Layout;
