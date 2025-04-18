// C:\nproject\fe_pdsw\src\app\layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "react-date-picker/dist/DatePicker.css"; 
import "./globals.css";
import ClientProvider from "@/components/providers/ClientProvider";
import RedisTestButton from "@/components/providers/RedisTestButton";
import Script from "next/script";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UPDS",
  description: "UPDS project",
  icons: {
    icon: 'nexpds.ico',           // /public/favicon.ico
    shortcut: 'nexpds.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    console.log("🌍 클라이언트 런타임에서 API_URL:", (window as any).__RUNTIME_CONFIG__?.LOGIN_API_URL ?? '');
  }, []);

  return (
    <html lang="en">
      <head>
        <Script src="/env.js" strategy="beforeInteractive" />
        {/* <script src="/env.js" strategy="beforeInteractive"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased body-top`}
      >
        <ClientProvider>
          {/* ✅ ClientProvider 내부에서 RedisTestButton 실행 */}
          {/* <RedisTestButton /> */}
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
