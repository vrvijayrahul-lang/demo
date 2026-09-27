import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuMekH™ — Business workspace platform",
  description: "A modern all-in-one workspace for teams, customers, projects, finance and automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
