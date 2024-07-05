import React from "react";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { SlidingProvider } from "@/components/sidebar/SlidingContext";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem>
      <SlidingProvider>
      <NextTopLoader />
      {children}
      </SlidingProvider>
    </ThemeProvider>
  );
};

export default Providers;
