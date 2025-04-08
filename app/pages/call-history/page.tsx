import { AppSidebar } from "@/components/common/app-sidebar"
import { HomeSection } from "@/components/common/home-section"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function CallHistory() {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex-1 overflow-auto">
                    <HomeSection />
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
