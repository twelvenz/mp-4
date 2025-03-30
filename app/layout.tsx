import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";


export const metadata: Metadata = {
  title: "Timezone Checker App",
  description: "Checks timezones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-indigo-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
