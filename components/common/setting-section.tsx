"use client"

import type React from "react"

import { useState } from "react"
import { MoreHorizontal, User, Users, Key, Webhook, CreditCard, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SettingsPage() {
    const [showInviteDialog, setShowInviteDialog] = useState(false)
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("Admin")

    const handleInviteMember = () => {
        console.log("Inviting member:", email, "with role:", role)
        setShowInviteDialog(false)
        setEmail("")
    }

    return (
        <div className="flex h-screen bg-white">
            {/* Main content */}
            <div className="flex-1 flex">
                {/* Settings sidebar */}
                <div className="w-[250px] border-r bg-muted/30">
                    <div className="p-4">
                        <ul className="space-y-1">
                            <SettingsNavItem icon={<User className="h-4 w-4" />} label="Profile Settings" />
                            <SettingsNavItem icon={<Users className="h-4 w-4" />} label="Members" active />
                            <SettingsNavItem icon={<Key className="h-4 w-4" />} label="API Keys" />
                            <SettingsNavItem icon={<Webhook className="h-4 w-4" />} label="Webhooks" />
                            <SettingsNavItem icon={<CreditCard className="h-4 w-4" />} label="Billing" />
                        </ul>
                    </div>
                </div>

                {/* Members content */}
                <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-semibold">Members</h1>
                        <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
                            <DialogTrigger asChild>
                                <Button className="bg-black text-white hover:bg-black/90">Invite a member</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Invite a Member</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email</label>
                                        <Input placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Role</label>
                                        <div className="flex gap-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="admin"
                                                    name="role"
                                                    value="Admin"
                                                    checked={role === "Admin"}
                                                    onChange={() => setRole("Admin")}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="admin">Admin</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="member"
                                                    name="role"
                                                    value="Member"
                                                    checked={role === "Member"}
                                                    onChange={() => setRole("Member")}
                                                    className="mr-2"
                                                />
                                                <label htmlFor="member">Member</label>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full bg-black text-white hover:bg-black/90"
                                        onClick={handleInviteMember}
                                        disabled={!email}
                                    >
                                        Send Invitation
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="relative mb-6">
                        <Input placeholder="Search members..." className="pl-8" />
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="border rounded-md">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b bg-muted/50">
                                    <th className="text-left font-medium text-sm p-4">Members</th>
                                    <th className="text-left font-medium text-sm p-4">Role</th>
                                    <th className="text-left font-medium text-sm p-4">Added on</th>
                                    <th className="text-right font-medium text-sm p-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <MemberRow email="prem@zudu.ai" role="Admin" addedOn="2/5/2025" />
                                <MemberRow email="lokesh@zudu.ai" role="Admin" addedOn="2/5/2025" />
                                <MemberRow email="saravanan@zudu.ai" role="Admin" addedOn="2/5/2025" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <li>
            <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${active ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
                    }`}
            >
                <span className="text-muted-foreground">{icon}</span>
                <span>{label}</span>
            </a>
        </li>
    )
}

function SettingsNavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <li>
            <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${active ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
                    }`}
            >
                <span className="text-muted-foreground">{icon}</span>
                <span>{label}</span>
            </a>
        </li>
    )
}

function MemberRow({ email, role, addedOn }: { email: string; role: string; addedOn: string }) {
    return (
        <tr className="border-b">
            <td className="p-4">
                <div className="flex items-center gap-2">
                    <span>{email}</span>
                </div>
            </td>
            <td className="p-4">{role}</td>
            <td className="p-4">{addedOn}</td>
            <td className="p-4 text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Change role</DropdownMenuItem>
                        <DropdownMenuItem>Reset password</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove member</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </td>
        </tr>
    )
}
