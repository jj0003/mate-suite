import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavigationMenu from "../modules/app-navigation-menu";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MateSuite",
  description: "WE ENGINEER PRODUCTIVITY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
      <nav className="sticky top-0 z-50 bg-white">
          <AppNavigationMenu/>
      </nav>
        {children}
      </body>
    </html>
  );
}
