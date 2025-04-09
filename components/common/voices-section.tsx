"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Search, AudioLines, FilePlus2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VoicesPage() {
    const [activeTab, setActiveTab] = useState("all-voices")
    const [showAddVoiceDialog, setShowAddVoiceDialog] = useState(false)
    const [voiceName, setVoiceName] = useState("")
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFile(e.target.files[0])
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setUploadedFile(e.dataTransfer.files[0])
        }
    }

    const handleAddVoice = () => {
        // Handle adding the voice here
        console.log("Adding voice:", voiceName, uploadedFile)
        setShowAddVoiceDialog(false)
        setVoiceName("")
        setUploadedFile(null)
    }

    return (
        <div className="flex h-screen bg-white">


            {/* Main content */}
            <div className="flex-1">

                <div className="p-6">
                    {/* Tabs */}
                    <div className="flex border-b mb-6">
                        <button
                            className={`pb-2 mr-6 text-sm font-medium ${activeTab === "all-voices" ? "border-b-2 border-black" : "text-muted-foreground"
                                }`}
                            onClick={() => setActiveTab("all-voices")}
                        >
                            All Voices
                        </button>
                        <button
                            className={`pb-2 text-sm font-medium ${activeTab === "your-voices" ? "border-b-2 border-black" : "text-muted-foreground"
                                }`}
                            onClick={() => setActiveTab("your-voices")}
                        >
                            Your Voices
                        </button>
                    </div>

                    {/* Search and filters */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1">
                            <Input placeholder="Search voices..." className="pl-8" />
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>

                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Voice type">
                                    <div className="flex items-center">
                                        <span>Voice type</span>
                                        {/* <ChevronDown className="ml-2 h-4 w-4" /> */}
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All types</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>

                        <Dialog open={showAddVoiceDialog} onOpenChange={setShowAddVoiceDialog}>
                            <DialogTrigger asChild>
                                <Button className="bg-black text-white hover:bg-black/90">Add a new voice</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add a New Voice</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Voice Name</label>
                                        <Input
                                            placeholder="Enter voice name"
                                            value={voiceName}
                                            onChange={(e) => setVoiceName(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Upload Audio File</label>
                                        <div
                                            className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer bg-muted/50 transition-colors"
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="audio/*"
                                                onChange={handleFileChange}
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <span className="rounded-md p-2 border bg-white">
                                                    <FilePlus2 className="h-8 w-8 text-muted-foreground" />
                                                </span>
                                                {uploadedFile ? (
                                                    <p className="text-sm">{uploadedFile.name}</p>
                                                ) : (
                                                    <>
                                                        <p className="text-sm font-medium">Drag and drop or click to upload</p>
                                                        <p className="text-xs text-muted-foreground">Supports formats MP3,MPEG</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-end justify-end gap-3">
                                        <Button
                                            className="w-fit text-black"
                                            variant={"outline"}
                                            onClick={handleAddVoice}
                                        // disabled={!voiceName || !uploadedFile}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className="w-fit bg-black"
                                            onClick={handleAddVoice}
                                        // disabled={!voiceName || !uploadedFile}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {activeTab === "all-voices" ? (
                        <div className="border rounded-md">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="text-left text-gray-500 font-medium text-sm p-4 w-[300px]">Voice</th>
                                        <th className="text-left text-gray-500 font-medium text-sm p-4">Trait</th>
                                        <th className="text-left text-gray-500 font-medium text-sm p-4">Voice ID</th>
                                        <th className="text-right font-medium text-sm p-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <VoiceRow
                                        name="Adrian"
                                        color="from-pink-400 to-purple-500"
                                        traits={["Indian", "English", "Male"]}
                                        id="11labs-Adrian"
                                    />
                                    <VoiceRow
                                        name="Amritanshu"
                                        color="from-purple-400 to-indigo-500"
                                        traits={["American", "English", "Female"]}
                                        id="11labs-Amritanshu"
                                    />
                                    <VoiceRow
                                        name="Amy"
                                        color="from-green-400 to-teal-500"
                                        traits={["French", "English", "Female"]}
                                        id="11labs-Amy"
                                    />
                                    <VoiceRow
                                        name="Andrew"
                                        color="from-blue-400 to-cyan-500"
                                        traits={["American", "English", "Male"]}
                                        id="11labs-Andrew"
                                    />
                                    <VoiceRow
                                        name="Anna"
                                        color="from-yellow-400 to-orange-500"
                                        traits={["Indian", "English", "Female"]}
                                        id="11labs-Anna"
                                    />
                                    <VoiceRow
                                        name="Billy"
                                        color="from-purple-400 to-pink-500"
                                        traits={["Indian", "English", "Female"]}
                                        id="11labs-Billy"
                                    />
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-40 border rounded-md bg-muted/20">
                            <div className="text-center">
                                <p className="text-muted-foreground mb-2">You haven't created any voices yet</p>
                                <Button className="bg-black text-white hover:bg-black/90" onClick={() => setShowAddVoiceDialog(true)}>
                                    Add a new voice
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


function VoiceRow({
    name,
    color,
    traits,
    id,
}: {
    name: string
    color: string
    traits: string[]
    id: string
}) {
    return (
        <tr className="border-b group hover:bg-muted/50 transition-colors">
            <td className="p-4">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <img src="/play.svg" className="h-3 w-3" alt="Play" />
                    </Button>
                    <div className="flex items-center gap-2">
                        <div className={`h-8 w-8 rounded-md bg-gradient-to-br ${color}`}></div>
                        <span className="font-medium">{name}</span>
                    </div>
                </div>
            </td>
            <td className="p-4">
                <div className="flex flex-wrap gap-2">
                    {traits.map((trait, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-xs rounded-md">
                            {trait}
                        </span>
                    ))}
                </div>
            </td>
            <td className="p-4">{id}</td>
            <td className="p-4 text-right w-[240px]">
                <Button variant="outline" size="sm" className="hidden group-hover:flex items-center gap-1">
                    <AudioLines className="h-3 w-3" />
                    <span>Use Voice</span>
                </Button>
            </td>
        </tr>
    )
}
