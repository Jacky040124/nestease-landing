import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "栖安 NestEase | 华人房东的智能物业管家",
  description: "AI 驱动的物业管理，让海外华人房东省心省力。中英双语服务，工单透明，月报清晰。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
