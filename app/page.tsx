import { AppSidebar } from "@/components/common/app-sidebar"
import { HomeSection } from "@/components/common/home-section"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <div className="flex h-full w-full items-center justify-center">
            <h1>
              Welcome To Dashboard !
            </h1>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
