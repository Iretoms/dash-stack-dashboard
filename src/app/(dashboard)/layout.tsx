import React from "react";
import type { Metadata } from "next";
import "../../app/globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "DashStack",
  description: "An dashboard",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-nunito w-full flex">
        <Sidebar />
        <section className="flex-1">
          <Navbar />
          <main className="bg-gray-1 h-[calc(100vh-70px)]">{children}</main>
        </section>
      </body>
    </html>
  );
};

export default layout;
