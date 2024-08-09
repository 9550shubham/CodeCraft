"use client";

import React, {useEffect} from "react";
import { Analytics } from "@vercel/analytics/react";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sidebar/>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
