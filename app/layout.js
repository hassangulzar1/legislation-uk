import { Inter } from "next/font/google";
import Navbar1 from "@/components/navbar/Navbar1";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legsilation-UK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar1 />
        {children}
      </body>
    </html>
  );
}
