import { AppSidebar } from "@/components/common/app-sidebar"
import DashboardPage from "@/components/common/dashboard"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  return (
    // <SidebarProvider>
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-auto">
        <DashboardPage />
      </SidebarInset>
    </div>
    // </SidebarProvider>
  )
}
