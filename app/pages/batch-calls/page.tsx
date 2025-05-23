import { AppSidebar } from "@/components/common/app-sidebar"
import BatchCallPage from "@/components/common/batch-call"
import Header from "@/components/common/header"
import { SidebarInset } from "@/components/ui/sidebar"

export default function CallHistory() {
    return (
        // <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
                <Header title="Batch Calls" />
                <BatchCallPage />
            </SidebarInset>
        </div>
        //  </SidebarProvider>
    )
}
