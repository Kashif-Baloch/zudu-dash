import { AppSidebar } from "@/components/common/app-sidebar"
import Header from "@/components/common/header"
import VoicesPage from "@/components/common/voices-section"
import { SidebarInset } from "@/components/ui/sidebar"

export default function Home() {
    return (
        // <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
                <Header title="Voices" />
                <VoicesPage />
            </SidebarInset>
        </div>
        // </SidebarProvider>
    )
}
