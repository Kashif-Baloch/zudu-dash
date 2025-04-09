import AgentsPage from "@/components/common/agents"
import { AppSidebar } from "@/components/common/app-sidebar"
import Header from "@/components/common/header"
import { SidebarInset } from "@/components/ui/sidebar"

export default function Home() {
    return (
        // <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
                <Header title="Agents" />
                <AgentsPage />
            </SidebarInset>
        </div>
        // </SidebarProvider>
    )
}
