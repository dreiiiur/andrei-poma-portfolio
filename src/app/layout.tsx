import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrei Poma | Creative Technologist & Full-Stack Developer",
  description: "Graphic Artist, Video Editor, Full-Stack Web Developer, and Automation Specialist. I build responsive websites, design premium digital assets, and create AI-powered business workflows.",
  keywords: [
    "Andrei Poma",
    "Portfolio",
    "Creative Technologist",
    "Full-Stack Web Developer",
    "Graphic Artist",
    "Video Editor",
    "Automation Specialist",
    "n8n Workflow",
    "AI Automation",
    "Next.js Portfolio"
  ],
  authors: [{ name: "Andrei Poma" }],
  openGraph: {
    title: "Andrei Poma | Creative Technologist & Full-Stack Developer",
    description: "Personal portfolio of Andrei Poma, showcasing design, full-stack web development, video production, and workflow automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen transition-colors duration-400`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
