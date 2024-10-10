import React from "react";
import type { Metadata } from "next";
import "../../app/globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "DashStack",
  description: "An dashboard",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-nunito w-full flex">
        <StoreProvider>
          <Sidebar />
          <section className="flex-1">
            <Navbar />
            <main className="bg-gray-1 h-[calc(100vh-70px)] px-5">
              {children}
            </main>
          </section>
        </StoreProvider>
      </body>
    </html>
  );
};

export default layout;
