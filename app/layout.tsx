import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Nanum_Myeongjo, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans_KR({ weight: ["400", "500", "600"], preload: false, variable: "--font-sans", display: "swap" });
const serif = Nanum_Myeongjo({ weight: ["400", "700", "800"], preload: false, variable: "--font-serif", display: "swap" });
const pen = Nanum_Pen_Script({ weight: "400", preload: false, variable: "--font-pen", display: "swap" });

export const metadata: Metadata = {
  title: "정재환 | 학생의 생각을 대신하지 않는 도구를 만드는 교사",
  description:
    "서울창일초등학교 교사 정재환입니다. 개념기반 탐구수업과 서술형 평가를 연구하며, 수업에 필요한 웹앱을 직접 만들어 공개합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable} ${pen.variable}`}>
      <body>{children}</body>
    </html>
  );
}
