import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chham Kaknika | Full-Stack Web Developer",
  description: "Portfolio of Chham Kaknika — Computer Science and Engineering student and early-career full-stack web developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
