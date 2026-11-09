import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareHome",
  description: "A simpler way to organize life in a sharehouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
