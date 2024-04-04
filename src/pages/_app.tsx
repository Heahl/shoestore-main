import React from "react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { ThemeContext } from "@/utils/ThemeContext";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      <main
        className={`font-sans ${inter.variable} ${theme}`} // Add the current theme as a class
        style={{ overscrollBehavior: "none" }}
      >
        <Component {...pageProps} />
      </main>
      <Toaster />
    </ThemeContext.Provider>
  );
};

export default MyApp;
