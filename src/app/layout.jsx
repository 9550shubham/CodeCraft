import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
// import ThemeSwitch from "@/components/panel/ThemeSwitch";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <ThemeSwitch /> */}
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
