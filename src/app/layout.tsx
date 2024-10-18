import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'next-cloudinary/dist/cld-video-player.css';
import "./globals.css";
import { ThemeProvider } from "@/providers/Theme-provider";
import Footer from "@/components/Footer";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wael",
  description: "follow me to get my news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         <div className="h-screen flex flex-col">
          <div className="flex-1">
            <TanstackProvider>
              {children}
            </TanstackProvider>
          </div>
          <Footer />
          </div>   
        </ThemeProvider>
        <Toaster />
        </body>
    </html>
  );
}
