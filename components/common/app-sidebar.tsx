"use client"
import { PhoneCall, Phone, FileScan, PhoneIncoming, Settings, User, ChartPie, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Sample navigation items
const navItems = [
    {
        title: "Dashboard",
        icon: ChartPie,
        href: "/",
        isActive: true,
    },
    {
        title: "Agents",
        icon: User,
        href: "/pages/agents",
    },
    {
        title: "Call History",
        icon: PhoneIncoming,
        href: "/pages/call-history",
    },
    {
        title: "Batch Call",
        icon: PhoneCall,
        href: "/pages/batch-calls",
    },
    {
        title: "Knowledge Base",
        icon: FileScan,
        href: "/pages/know-base",
    },
    {
        title: "Phone Numbers",
        icon: Phone,
        href: "/pages/phone-nums",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/pages/settings",
    },
]

export function AppSidebar() {
    const { toggleSidebar } = useSidebar()

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" tooltip="AppName">
                            <h1 className="text-lg font-bold text-foreground">
                                Zudu AI
                            </h1>
                            <SidebarTrigger onClick={toggleSidebar} className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={item.isActive} tooltip={item.title}>
                                <Link href={item.href} className="flex items-center gap-2">
                                    <item.icon className="size-4" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton tooltip="John Doe">
                            <Avatar className="size-8">
                                <AvatarImage src="https://randomuser.me/portraits/men/20.jpg" alt="User" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Prem Kumar</span>
                                <span className="text-xs text-muted-foreground">My Workspace</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
