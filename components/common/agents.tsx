"use client"

import { useState } from "react"
import { Plus, Settings, Volume2, Copy, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function AgentsPage() {
    const [activeAgent, setActiveAgent] = useState("Retail tracking")

    return (
        <div className="flex h-screen bg-white">
            {/* Main content */}
            <div className="flex-1 flex">
                {/* Agents list section */}
                <div className="w-[340px] border-r">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-semibold">AI Agents</h1>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Create New Agent</DialogTitle>
                                        <DialogDescription>
                                            Add a new AI agent to your collection.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Agent Name</label>
                                            <Input placeholder="Enter agent name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Agent Type</label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select agent type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="customer-service">Customer Service</SelectItem>
                                                    <SelectItem value="sales">Sales</SelectItem>
                                                    <SelectItem value="support">Support</SelectItem>
                                                    <SelectItem value="custom">Custom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Button className="w-full">Create Agent</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="relative mb-4">
                            <Input placeholder="Search agents by name" className="pl-8 bg-background" />
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
                            <AgentItem
                                name="Automotive Agent"
                                isActive={activeAgent === "Automotive Agent"}
                                onClick={() => setActiveAgent("Automotive Agent")}
                            />
                            <AgentItem
                                name="Airline Ticket Modification"
                                isActive={activeAgent === "Airline Ticket Modification"}
                                onClick={() => setActiveAgent("Airline Ticket Modification")}
                            />
                            <AgentItem
                                name="Retail tracking"
                                isActive={activeAgent === "Retail tracking"}
                                onClick={() => setActiveAgent("Retail tracking")}
                            />
                            <AgentItem
                                name="Utility Payment Reminder"
                                isActive={activeAgent === "Utility Payment Reminder"}
                                onClick={() => setActiveAgent("Utility Payment Reminder")}
                            />
                            <AgentItem
                                name="Dental Scheduling"
                                isActive={activeAgent === "Dental Scheduling"}
                                onClick={() => setActiveAgent("Dental Scheduling")}
                            />
                        </div>
                    </div>
                </div>

                {/* Agent configuration section */}
                <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-6 max-w-3xl">
                        <h1 className="text-xl font-semibold">{activeAgent}</h1>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" className="px-[14px] py-2" size="sm">
                                Test AI agent
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit agent</DropdownMenuItem>
                                    <DropdownMenuItem>Duplicate agent</DropdownMenuItem>
                                    <DropdownMenuItem>Export configuration</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete agent</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div className="max-w-3xl space-y-6">
                        {/* Basic section */}
                        <div className="border rounded-lg p-6 space-y-6">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Volume2 className="h-4 w-4" />
                                <span>Basic</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Enter the language and voice to get started</p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Agent Language</label>
                                    <Select defaultValue="english">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇺🇸
                                                    </span>
                                                    <span>English</span>
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="english">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇺🇸
                                                    </span>
                                                    <span>English</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="spanish">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇪🇸
                                                    </span>
                                                    <span>Spanish</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="french">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇫🇷
                                                    </span>
                                                    <span>French</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="german">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇩🇪
                                                    </span>
                                                    <span>German</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Agent Voice</label>
                                    <Select defaultValue="raj">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🎙️
                                                    </span>
                                                    <span>Raj</span>
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="raj">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🎙️
                                                    </span>
                                                    <span>Raj</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="sarah">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🎙️
                                                    </span>
                                                    <span>Sarah</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="michael">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🎙️
                                                    </span>
                                                    <span>Michael</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="emma">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🎙️
                                                    </span>
                                                    <span>Emma</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Speed</label>
                                <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                <p className="text-xs text-muted-foreground">
                                    Controls the speed of the generated speech. Values below 1.0 will slow down the speech, while values
                                    above 1.0 will speed it up. Extreme values may affect the quality of the generated speech.
                                </p>
                            </div>
                        </div>

                        {/* Dispatch Settings */}
                        <div className="border rounded-lg p-6 space-y-6">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Settings className="h-4 w-4" />
                                <span>Dispatch Settings</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Add transfer numbers and set Duration</p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Transfer Number</label>
                                    <Select defaultValue="us">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇺🇸
                                                    </span>
                                                    <span>+1</span>
                                                </div>
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="us">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇺🇸
                                                    </span>
                                                    <span>+1</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="uk">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇬🇧
                                                    </span>
                                                    <span>+44</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="india">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇮🇳
                                                    </span>
                                                    <span>+91</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="australia">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                        🇦🇺
                                                    </span>
                                                    <span>+61</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Timezone</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a timezone" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                                            <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                                            <SelectItem value="cst">Central Time (GMT-6)</SelectItem>
                                            <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                                            <SelectItem value="ist">India (GMT+5:30)</SelectItem>
                                            <SelectItem value="jst">Japan (GMT+9)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Max Duration</label>
                                <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                <p className="text-xs text-muted-foreground">
                                    When the call starts, a timer is set for the max duration minutes. At the end of that timer, if the
                                    call is still active it will be automatically ended.
                                </p>
                            </div>
                        </div>

                        {/* Model Settings */}
                        <div className="border rounded-lg p-6 space-y-6">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                                <span>Model Settings</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Tune the model and prompt settings</p>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Message</label>
                                <Textarea placeholder="e.g. Hello, how can I help you today?" className="min-h-[100px]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">System prompt</label>
                                <Textarea
                                    placeholder="You are a helpful assistant."
                                    className="min-h-[100px]"
                                    defaultValue="You are a helpful assistant."
                                />
                            </div>
                        </div>

                        {/* Knowledge */}
                        <div className="border rounded-lg p-6 space-y-6">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                </svg>
                                <span>Knowledge</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Add Knowledge base and tools</p>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Knowledge base</label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Add Knowledge base" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="product-docs">Product Documentation</SelectItem>
                                        <SelectItem value="faq">FAQ Database</SelectItem>
                                        <SelectItem value="support-articles">Support Articles</SelectItem>
                                        <SelectItem value="custom">Custom Knowledge Base</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Tools</label>
                                <div className="border rounded-md p-4 flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-md border bg-muted">
                                            <svg
                                                className="h-3 w-3"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">end_call</p>
                                            <p className="text-xs text-muted-foreground">
                                                Gives agent the ability to end the call with the user.
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="gap-2 bg-black text-white hover:bg-transparent mt-2">
                                            <Plus className="h-4 w-4" />
                                            <span>Add tool</span>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Add Tool</DialogTitle>
                                            <DialogDescription>
                                                Select a tool to add to your agent.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Tool Type</label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select tool type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="api-call">API Call</SelectItem>
                                                        <SelectItem value="database-query">Database Query</SelectItem>
                                                        <SelectItem value="transfer-call">Transfer Call</SelectItem>
                                                        <SelectItem value="custom">Custom Tool</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Tool Name</label>
                                                <Input placeholder="Enter tool name" />
                                            </div>
                                            <Button className="w-full">Add Tool</Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AgentItem({ name, isActive = false, onClick }: { name: string; isActive?: boolean; onClick?: () => void }) {
    return (
        <div
            className={`flex items-center gap-3 p-2 rounded-md ${isActive ? "bg-muted" : "hover:bg-muted/50"} cursor-pointer`}
            onClick={onClick}
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
                    <path d="M12 12V6.5" />
                    <path d="M8 12v-2" />
                    <path d="M16 12v-2" />
                    <path d="M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
                </svg>
            </div>
            <span className="text-sm">{name}</span>
        </div>
    )
}
