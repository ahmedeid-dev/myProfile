import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "@fortawesome/fontawesome-free/js/all.min.js"
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./(components)/navbar/navbar";
import Footer from "./(components)/footer/footer";
import "./globals.css";
import "../assets/style/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Profile",
  description: "Generated For My Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-vh-100 py-5 container">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  </>
}
