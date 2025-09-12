import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";


const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potion",
  description: "Best autonomous workspace",
  icons: {
  icon: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logolight.png",
      href: "/logolight.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logodark.png",
      href: "/logodark.png",
    }
  ]
}
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="potion-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}