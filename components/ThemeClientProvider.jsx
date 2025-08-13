"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeClientProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {mounted && children}
    </ThemeProvider>
  );
}
