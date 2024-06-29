import React from "react";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem>
      <NextTopLoader />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
