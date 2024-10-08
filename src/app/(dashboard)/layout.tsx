import React from "react";
import type { Metadata } from "next";
import "../../app/globals.css";

export const metadata: Metadata = {
  title: "DashStack",
  description: "An dashboard",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-nunito">{children}</body>
    </html>
  );
};

export default layout;
