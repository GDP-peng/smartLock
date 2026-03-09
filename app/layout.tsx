import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rebekey 丽贝卡 - 智能锁十大品牌",
  description: "丽贝卡智能锁，专注于智能门锁研发与制造，3D 人脸识别、掌静脉解锁、AI 智能语音，为您的家庭提供全方位的安全守护。",
  keywords: ["智能锁", "智能门锁", "人脸识别锁", "丽贝卡", "Rebekey", "智能家居", "安全锁"],
  authors: [{ name: "Rebekey 丽贝卡" }],
  openGraph: {
    title: "Rebekey 丽贝卡 - 智能锁十大品牌",
    description: "丽贝卡智能锁，专注于智能门锁研发与制造，为您的家庭提供全方位的安全守护。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
