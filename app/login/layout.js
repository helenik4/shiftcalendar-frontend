import "../styles/globals.css";

export const metadata = {
  title: "ShiftCalendar",
  description: "ShiftCalendar",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
