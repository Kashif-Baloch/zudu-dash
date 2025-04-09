import { AppSidebar } from "@/components/common/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { CallHistorySec } from "@/components/common/call-sections"
import Header from "@/components/common/header"

export default function CallHistory() {
    return (
        // <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
                <Header title="Call History" />
                <CallHistorySec />
            </SidebarInset>
        </div>
        // </SidebarProvider>
    )
}
