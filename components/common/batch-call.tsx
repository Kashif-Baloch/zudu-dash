"use client"

import type React from "react"

import { useState } from "react"
import { Plus, MoreHorizontal, Phone, AudioLines, Headset, Send, FilePlus2, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function BatchCallPage() {
    const [activeBatch, setActiveBatch] = useState("Batch Call 3")
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        // Handle file drop logic here
    }

    return (
        <div className="flex h-screen bg-white">

            {/* Main content */}
            <div className="flex-1 flex">
                {/* Batch list section */}
                <div className="w-[300px] border-r bg-muted/30">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-semibold">All Batches</h1>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="relative mb-4">
                            <Input placeholder="Search Batch Name" className="pl-8 bg-background" />
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
                            <BatchItem
                                name="Batch Call 1"
                                onClick={() => setActiveBatch("Batch Call 1")}
                                isActive={activeBatch === "Batch Call 1"}
                            />
                            <BatchItem
                                name="Batch Call 2"
                                onClick={() => setActiveBatch("Batch Call 2")}
                                isActive={activeBatch === "Batch Call 2"}
                            />
                            <BatchItem
                                name="Batch Call 3"
                                onClick={() => setActiveBatch("Batch Call 3")}
                                isActive={activeBatch === "Batch Call 3"}
                            />
                            <BatchItem
                                name="Batch Call 4"
                                onClick={() => setActiveBatch("Batch Call 4")}
                                isActive={activeBatch === "Batch Call 4"}
                            />
                            <BatchItem
                                name="Batch Call 5"
                                onClick={() => setActiveBatch("Batch Call 5")}
                                isActive={activeBatch === "Batch Call 5"}
                            />
                        </div>
                    </div>
                </div>

                {/* Batch configuration section */}
                <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-semibold">{activeBatch}</h1>
                        <div className="flex items-center gap-2">
                            <Button size={"sm"} className="bg-black text-white hover:bg-black/90">Send Batch Call</Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 border">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Edit batch</DropdownMenuItem>
                                    <DropdownMenuItem>Duplicate batch</DropdownMenuItem>
                                    <DropdownMenuItem>Export configuration</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">Delete batch</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div className="max-w-3xl space-y-6">
                        {/* Basic section */}
                        <div className="border rounded-lg  space-y-6">
                            <div className="bg-muted/30 p-3 border-b">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <AudioLines className="h-4 w-4" />
                                    <span>Basic</span>
                                </div>
                                <p className="text-sm ml-6 text-muted-foreground">Enter the language and voice to get started</p>
                            </div>
                            <div className="grid px-6 grid-cols-2 gap-6">
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
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2 px-6">
                                <label className="text-sm font-medium">Upload Recipients</label>
                                <div
                                    className={`border-2 border-dashed bg-muted/30 rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20"
                                        }`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById("file-upload")?.click()}
                                >
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        accept=".csv"
                                        onChange={(e) => {
                                            // Handle file selection
                                        }}
                                    />
                                    <span className="rounded-md p-2 border bg-white">
                                        <FilePlus2 className="h-8 w-8 text-muted-foreground" />
                                    </span>
                                    <p className="text-sm font-medium mb-1">Click or drag files to upload</p>
                                    <p className="text-xs text-muted-foreground">Supported formats: CSV</p>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Upload a CSV file with the recipients you'd like to call. A phone_number column is required.
                                </p>
                            </div>

                            <div className="space-y-2 px-6">
                                <label className="text-sm font-medium">Speed</label>
                                <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                <p className="text-xs text-muted-foreground">
                                    Controls the speed of the generated speech. Values below 1.0 will slow down the speech, while values
                                    above 1.0 will speed it up. Extreme values may affect the quality of the generated speech.
                                </p>
                            </div>

                            <div className="space-y-2 px-6 pb-5">
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
                        </div>

                        {/* Dispatch Settings */}
                        <div className="border rounded-lg space-y-6">
                            <div className="bg-muted/30 p-3 border-b">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Headset className="h-4 w-4" />
                                    <span>Dispatch Settings</span>
                                </div>
                                <p className="text-sm ml-6 text-muted-foreground">Add transfer numbers and set Duration</p>
                            </div>

                            <div className="grid grid-cols-2 px-6 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">From Number</label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select the phone number" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="number1">+1 (555) 123-4567</SelectItem>
                                            <SelectItem value="number2">+1 (555) 987-6543</SelectItem>
                                            <SelectItem value="number3">+1 (555) 456-7890</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Transfer Number</label>
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-2 border rounded-l-md px-3 py-2 bg-muted/30">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-sm border bg-muted text-xs">
                                                🇺🇸
                                            </span>
                                            <span>+1</span>
                                        </div>
                                        <Input className="rounded-l-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 px-6 pb-5">
                                <label className="text-sm font-medium">Max Duration</label>
                                <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                <p className="text-xs text-muted-foreground">
                                    When the call starts, a timer is set for the max duration minutes. At the end of that timer, if the
                                    call is still active it will be automatically ended.
                                </p>
                            </div>
                        </div>

                        {/* Model Settings */}
                        <div className="border rounded-lg space-y-6">
                            <div className="bg-muted/30 p-3 border-b">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Send className="h-4 w-4" />
                                    <span>Model Settings</span>
                                </div>
                                <p className="text-sm ml-6 text-muted-foreground">Tune the model and prompt settings</p>
                            </div>

                            <div className="space-y-2 px-6">
                                <label className="text-sm font-medium">First Message</label>
                                <Textarea placeholder="e.g. Hello, how can I help you today?" className="min-h-[100px]" />
                            </div>

                            <div className="space-y-2 px-6 pb-5">
                                <label className="text-sm font-medium">System prompt</label>
                                <Textarea
                                    placeholder="You are a helpful assistant."
                                    className="min-h-[100px]"
                                    defaultValue="You are a helpful assistant."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BatchItem({ name, isActive = false, onClick }: { name: string; isActive?: boolean; onClick?: () => void }) {
    return (
        <div
            className={`flex items-center gap-3 p-2 rounded-md ${isActive ? "bg-muted" : "hover:bg-muted/50"} cursor-pointer`}
            onClick={onClick}
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                <Phone className="h-3 w-3 text-muted-foreground" />
            </div>
            <span className="text-sm">{name}</span>
        </div>
    )
}
