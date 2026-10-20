import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LumiNest — Không Gian Sống Sinh Thái Độc Bản (Demo)",
  description:
    "Website giới thiệu và tìm kiếm bất động sản sinh thái cao cấp tại Việt Nam lấy cảm hứng từ EverGreen (Giao diện Demo).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="min-h-screen bg-evergreen-bg text-evergreen-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
