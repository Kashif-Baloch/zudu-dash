import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar";
const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Zudu AI Dashboard",
  description: "Dashboard for Zudu AI application",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the sidebar state from cookies
  const cookieStore = cookies()
  const sidebarState = (await cookieStore).get("sidebar:state")
  const defaultOpen = sidebarState ? sidebarState.value === "true" : true

  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}      >
        <SidebarProvider defaultOpen={defaultOpen}>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
