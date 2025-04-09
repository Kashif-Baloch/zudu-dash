"use client"
import { Settings, Phone, FileScan, PhoneCall, PhoneIncoming, AudioLines, User, ChartPie, PanelRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar"

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
        title: "Voices",
        icon: AudioLines,
        href: "/pages/voices",
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
        href: "/pages/setting",
    },
]

export function AppSidebar() {
    const { toggleSidebar } = useSidebar()
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <span className="font-bold text-sm">Z</span>
                        </div>
                        <span className="text-lg font-bold transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
                            Zudu AI
                        </span>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="h-8 w-8 group-data-[collapsible=icon]:opacity-0 rounded-md p-1.5 hover:bg-muted flex items-center justify-center"
                    >
                        <PanelRight className="h-4 w-4" />
                    </button>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarMenu>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild tooltip={item.title} className={cn(isActive && "bg-muted/30 font-medium")}>
                                    <Link href={item.href} className="flex items-center gap-2">
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="p-3">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 shrink-0">
                        <AvatarImage src="https://randomuser.me/portraits/men/20.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
                        <span className="text-sm font-medium truncate">Prem Kumar</span>
                        <span className="text-xs text-muted-foreground truncate">My Workspace</span>
                    </div>
                </div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
