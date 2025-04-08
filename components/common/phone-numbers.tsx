"use client"

import type React from "react"

import { useState } from "react"
import { Plus, MoreHorizontal, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PhoneNumbersPage() {
    const [activeNumber, setActiveNumber] = useState("+91 22 3104 3984")
    const [showAddNumberDialog, setShowAddNumberDialog] = useState(false)

    return (
        <div className="flex h-screen bg-white">

            {/* Main content */}
            <div className="flex-1">

                <div className="flex h-[calc(100vh-73px)]">
                    {/* Phone numbers list section */}
                    <div className="w-[340px] border-r">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-xl font-semibold">All Numbers</h1>
                                <Dialog open={showAddNumberDialog} onOpenChange={setShowAddNumberDialog}>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Add New Phone Number</DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Phone Number</label>
                                                <Input placeholder="Enter phone number" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Country</label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="us">United States</SelectItem>
                                                        <SelectItem value="in">India</SelectItem>
                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                        <SelectItem value="ca">Canada</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <Button className="w-full" onClick={() => setShowAddNumberDialog(false)}>
                                                Add Number
                                            </Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="relative mb-4">
                                <Input placeholder="Search phone numbers" className="pl-8 bg-background" />
                                <svg
                                    className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>

                            <div className="space-y-1">
                                <PhoneNumberItem
                                    number="+1 912 922 3977"
                                    onClick={() => setActiveNumber("+1 912 922 3977")}
                                    isActive={activeNumber === "+1 912 922 3977"}
                                />
                                <PhoneNumberItem
                                    number="+1 251 315 5800"
                                    onClick={() => setActiveNumber("+1 251 315 5800")}
                                    isActive={activeNumber === "+1 251 315 5800"}
                                />
                                <PhoneNumberItem
                                    number="+91 22 3104 3984"
                                    onClick={() => setActiveNumber("+91 22 3104 3984")}
                                    isActive={activeNumber === "+91 22 3104 3984"}
                                />
                                <PhoneNumberItem
                                    number="+1 681 377 3377"
                                    onClick={() => setActiveNumber("+1 681 377 3377")}
                                    isActive={activeNumber === "+1 681 377 3377"}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Phone number details section */}
                    <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-semibold">{activeNumber}</h1>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit number</DropdownMenuItem>
                                    <DropdownMenuItem>View call history</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete number</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className="max-w-3xl space-y-6">
                            {/* Inbound calls section */}
                            <div className="border rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-medium">Inbound calls</h2>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Assign an agent to handle calls to this phone number.
                                </p>

                                <div className="w-full">
                                    <Select defaultValue="zudu">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Zudu</span>
                                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="zudu">Zudu</SelectItem>
                                            <SelectItem value="agent1">Agent 1</SelectItem>
                                            <SelectItem value="agent2">Agent 2</SelectItem>
                                            <SelectItem value="agent3">Agent 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Outbound calls section */}
                            <div className="border rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-medium">Outbound calls</h2>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Assign an agent to handle calls to this phone number.
                                </p>

                                <div className="w-full">
                                    <Select defaultValue="zudu">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Zudu</span>
                                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="zudu">Zudu</SelectItem>
                                            <SelectItem value="agent1">Agent 1</SelectItem>
                                            <SelectItem value="agent2">Agent 2</SelectItem>
                                            <SelectItem value="agent3">Agent 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
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

function PhoneNumberItem({
    number,
    isActive = false,
    onClick,
}: {
    number: string
    isActive?: boolean
    onClick?: () => void
}) {
    return (
        <div
            className={`flex items-center justify-between p-2 rounded-md ${isActive ? "bg-muted" : "hover:bg-muted/50"
                } cursor-pointer`}
        >
            <div className="flex items-center gap-3" onClick={onClick}>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                </div>
                <span className="text-sm">{number}</span>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreHorizontal className="h-3 w-3" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit number</DropdownMenuItem>
                    <DropdownMenuItem>View call history</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete number</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
