"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Plus, MoreHorizontal, FileText, FilePlus2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function KnowledgeBasePage() {
    const [activeKB, setActiveKB] = useState("KB 2")
    const [showAddFileDialog, setShowAddFileDialog] = useState(false)
    const [fileName, setfileName] = useState("")
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

    const handleAddFile = () => {
        // Handle adding the voice here
        console.log("Adding voice:", fileName, uploadedFile)
        setShowAddFileDialog(false)
        setfileName("")
        setUploadedFile(null)
    }


    return (
        <div className="flex h-screen bg-white">


            {/* Main content */}
            <div className="flex-1">
                <div className="flex h-[calc(100vh-73px)]">
                    {/* KB list section */}
                    <div className="w-[300px] border-r bg-muted/30">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-xl font-semibold">All KB</h1>
                                {/* <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Plus className="h-4 w-4" />
                                </Button> */}
                                <Dialog open={showAddFileDialog} onOpenChange={setShowAddFileDialog}>
                                    <DialogTrigger asChild>
                                        <Plus className="h-4 w-4" />
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle className="flex items-center gap-2">
                                                <span className="p-2 border rounded-md">
                                                    <FileText className="h-4 w-4" />
                                                </span>
                                                Add Files
                                            </DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4 ">
                                            <div className="space-y-2">
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
                                                    className="w-fit bg-black"
                                                    onClick={handleAddFile}
                                                // disabled={!fileName || !uploadedFile}
                                                >
                                                    Save
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="relative mb-4">
                                <Input placeholder="Search Knowledge Base" className="pl-8 bg-background" />
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
                                <KBItem name="KB 1" onClick={() => setActiveKB("KB 1")} isActive={activeKB === "KB 1"} />
                                <KBItem name="KB 2" onClick={() => setActiveKB("KB 2")} isActive={activeKB === "KB 2"} />
                                <KBItem name="KB 3" onClick={() => setActiveKB("KB 3")} isActive={activeKB === "KB 3"} />
                            </div>
                        </div>
                    </div>

                    {/* KB content section */}
                    <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-semibold">{activeKB}</h1>
                            <div className="flex items-center gap-2">
                                <Button size={"sm"} className="bg-black text-white hover:bg-black/90">Edit</Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 border">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Duplicate KB</DropdownMenuItem>
                                        <DropdownMenuItem>Export KB</DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">Delete KB</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-sm font-medium mb-4">
                                    <FileText className="h-4 w-4" />
                                    <span>File Content</span>
                                </div>

                                <div className="space-y-4 text-sm">
                                    <p>
                                        is an AI-driven voice technology company based in Chennai, India, specializing in advanced voice
                                        solutions designed to enhance user experiences across various industries. Our mission is to
                                        revolutionize human-computer interactions by providing natural, intuitive, and efficient voice-based
                                        interfaces.
                                    </p>
                                    <p>Zudu.ai</p>
                                    <p className="font-medium">Our Vision:</p>
                                    <p>
                                        At Zudu.ai, we envision a world where voice technology seamlessly integrates into daily life, making
                                        interactions with digital systems more human-like and accessible. We aim to be at the forefront of
                                        this transformation, driving innovation and setting new standards in voice technology.
                                    </p>
                                    <p className="font-medium">Our Team:</p>
                                    <p>
                                        Our team comprises experts in artificial intelligence, machine learning, natural language
                                        processing, and software development. With diverse backgrounds and a shared passion for innovation,
                                        we collaborate to create cutting-edge voice solutions that address real-world challenges.
                                    </p>
                                    <p className="font-medium">Our Approach:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                User-Centric Design: We prioritize the needs and preferences of end-users, ensuring our voice
                                                solutions are intuitive, responsive, and engaging.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Continuous Improvement: Through ongoing research and development, we strive to enhance the
                                                capabilities of our voice technology, keeping pace with evolving industry trends and user
                                                expectations.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Collaboration: We partner with businesses across various sectors to tailor our voice solutions
                                                to specific use cases, delivering personalized and effective results.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="font-medium">Why Choose Zudu.ai:</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Expertise: With a deep understanding of AI and voice technology, we deliver solutions that are
                                                both innovative and reliable.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Customization: We offer flexible solutions tailored to the unique requirements of each client,
                                                ensuring optimal integration and performance.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Support: Our dedicated support team is committed to assisting clients throughout the
                                                implementation process and beyond, ensuring seamless adoption and operation. Features:
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0"></span>
                                            <span>
                                                Multilingual Support: Interact in over 100 languages, ensuring effective communication with a
                                                global audience.
                                            </span>
                                        </li>
                                    </ul>
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

function KBItem({ name, isActive = false, onClick }: { name: string; isActive?: boolean; onClick?: () => void }) {
    return (
        <div
            className={`flex items-center gap-3 p-2 rounded-md ${isActive ? "bg-muted" : "hover:bg-muted/50"} cursor-pointer`}
            onClick={onClick}
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                <svg
                    className="h-3 w-3 text-muted-foreground"
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
            </div>
            <span className="text-sm">{name}</span>
        </div>
    )
}
