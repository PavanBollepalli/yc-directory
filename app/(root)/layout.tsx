import React from "react";
import NavBar from "@/components/NavBar";
import SentryInit from "@/components/SentryInit";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <NavBar />
      {children}
      <SentryInit />
    </main>
  );
}
