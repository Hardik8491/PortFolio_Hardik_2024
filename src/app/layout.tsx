"use client";

import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],

  variable: "--font-poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              {children}
              
             
              <Toaster position="top-center" reverseOrder={false} />
              </ThemeProvider>
         

       
      </body>
    </html>
  );
}

