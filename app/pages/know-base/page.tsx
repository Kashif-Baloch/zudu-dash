import { AppSidebar } from "@/components/common/app-sidebar"
import Header from "@/components/common/header"
import { HomeSection } from "@/components/common/home-section"
import KnowledgeBasePage from "@/components/common/knowledge-base"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden">
                <AppSidebar />
                <SidebarInset className="flex-1 overflow-auto">
                    <Header title="Knowledge Base " />
                    <KnowledgeBasePage />
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
