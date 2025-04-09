"use client"

import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"

// writing cmd cli command to install any shadcn ui component for ref using npm
// npx shadcn@latest add <component-name> --npm
// npx shadcn@latest add button --npm



import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Calendar, Search, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import VoiceWave from "./voice-wave"

interface CallRecord {
    id: string
    time: string
    duration: string
    type: string
    cost: string
    disconnection: string
    callStatus: string
    callSuccessful: boolean | null
}
interface TabType {
    title: string
    value: string
}

const callRecords: CallRecord[] = [
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/20/2025 22:00",
        duration: "0:10",
        type: "phone_call",
        cost: "$0.023",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: true,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/17/2025 22:35",
        duration: "0:08",
        type: "phone_call",
        cost: "$0.019",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: false,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/15/2025 14:22",
        duration: "0:15",
        type: "phone_call",
        cost: "$0.031",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: true,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/12/2025 09:45",
        duration: "0:11",
        type: "phone_call",
        cost: "$0.025",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: true,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/10/2025 17:33",
        duration: "0:07",
        type: "phone_call",
        cost: "$0.016",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: false,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/08/2025 12:18",
        duration: "0:13",
        type: "phone_call",
        cost: "$0.027",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: true,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/20/2025 22:00",
        duration: "0:10",
        type: "phone_call",
        cost: "$0.023",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: true,
    },
    {
        id: "UczXSQiQMwrcHZ0jMzU3",
        time: "03/17/2025 22:35",
        duration: "0:08",
        type: "phone_call",
        cost: "$0.019",
        disconnection: "user hangup",
        callStatus: "ended",
        callSuccessful: false,
    }
]

const tabs: TabType[] = [
    {
        title: "Overview",
        value: "overview"
    },
    {
        title: "Transcription",
        value: "transcription"
    },
    {
        title: "Client data",
        value: "client-data"
    },
    {
        title: "Phone call",
        value: "phone-call"
    },
]

const messages = [
    {
        id: 1,
        sender: "bot",
        content: "Hello! I am Zudu. Your AI voice assistant. How are you doing?",
        timestamp: "0:00",
    },
    {
        id: 2,
        sender: "user",
        content: "Yeah I'm good, how are you?",
        timestamp: "0:04",
    },
    {
        id: 3,
        sender: "bot",
        content: "I'm doing great. Thank you for reaching out to Zudu. I'd love to learn a bit about you. What's your name?",
        timestamp: "0:08",
    },
    {
        id: 4,
        sender: "user",
        content: "My name is Prem",
        timestamp: "0:15",
    },
    {
        id: 5,
        sender: "bot",
        content: "Nice to meet you, Prem! What's the name of your company?",
        timestamp: "0:18",
    },
    {
        id: 6,
        sender: "user",
        content: "Company is Spice Blue",
        timestamp: "0:24",
    },
    {
        id: 7,
        sender: "bot",
        content: "Got it! Spice Blue sounds interesting. What's the best email to reach you at? I'll make sure our team follows up with helpful info.",
        timestamp: "0:27",
    },
    {
        id: 8,
        sender: "user",
        content: "...",
        timestamp: "0:41",
    },
    {
        id: 7,
        sender: "bot",
        content: "Just checking in, Prem. Could you please...",
        timestamp: "0:42",
    },
];

const CallHistoryPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAgent, setSelectedAgent] = useState("all");
    const [selectedTimeframe, setSelectedTimeframe] = useState("last-month");
    const [selectedRecord, setSelectedRecord] = useState<CallRecord | null>(null)
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const [activeTab, setActiveTab] = useState<TabType>(
        {
            title: "Overview",
            value: "overview"
        }
    )
    const handleRowClick = (record: CallRecord) => {
        setSelectedRecord(record)
        setIsSheetOpen(true)
    }

    return (
        <div className='w-full'>

            {/* bottom  */}
            <div className="w-full py-5 px-6 overflow-x-auto max-w-[100%]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center !gap-3 mb-4">
                    <div className="relative w-full md:w-auto flex-1">
                        <Search className="absolute left-[10px] top-1/2 transform -translate-y-1/2 text-[#818189] h-4 w-4" />
                        <Input
                            placeholder="Search Call History..."
                            className="pl-8 w-full !rounded-[8px] !text-sm placeholder:!text-[#818189] placeholder:!text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex !gap-3 w-full md:w-auto">
                        <div className="relative w-full md:w-40">
                            <Select value={selectedAgent} onValueChange={setSelectedAgent} >
                                <SelectTrigger className="w-full !rounded-[8px] px-3 cursor-pointer">
                                    <div className="flex items-center justify-start gap-1.5 w-full">
                                        <User className="h-4 w-4 text-[#0F0F10]" />
                                        <SelectValue placeholder="All agents " className="text-[#0F0F10] font-inter !text-[15px]" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All agents</SelectItem>
                                    <SelectItem value="agent1">Agent 1</SelectItem>
                                    <SelectItem value="agent2">Agent 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="relative w-full md:w-40">
                            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                                <SelectTrigger className="w-full !rounded-[8px] px-3 cursor-pointer">
                                    <div className="flex items-center justify-start gap-1.5 w-full">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <SelectValue placeholder="Last month" className="text-[#0F0F10] font-inter !text-[15px]" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="last-month">Last month</SelectItem>
                                    <SelectItem value="last-week">Last week</SelectItem>
                                    <SelectItem value="last-year">Last year</SelectItem>
                                    <SelectItem value="custom">Custom range</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                    <Table className="rounded-md">
                        <TableHeader>
                            <TableRow className="bg-[#FAFAFA]">
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px] pl-[17px]">Time</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Duration</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Type</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Cost</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Disconnection</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Call Status</TableHead>
                                <TableHead className="font-medium !text-[#7D7D86] text-sm font-inter py-[11px]">Call Successful</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {callRecords.map((record, index) => (
                                <TableRow onClick={() => handleRowClick(record)} key={index} className="cursor-pointer">
                                    <TableCell className="pl-[17px] py-3.5 text-sm text-[#0F0F10] font-[400]">{record.time}</TableCell>
                                    <TableCell className="py-3.5 text-[#0F0F10] font-[500] text-[12px]">{record.duration}</TableCell>
                                    <TableCell className="py-3.5  text-sm text-[#0F0F10] font-[400]">{record.type}</TableCell>
                                    <TableCell className="py-3.5  text-sm text-[#0F0F10] font-[400]">{record.cost}</TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center text-sm text-[#7D7D86] font-[400]">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                            {record.disconnection}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center text-sm text-[#7D7D86] font-[400]">
                                            <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                                            {record.callStatus}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center text-sm text-[#7D7D86] font-[400]">
                                            <div
                                                className={`w-2 h-2 rounded-full ${record.callSuccessful ? "bg-blue-500" : "bg-red-500"} mr-2`}
                                            ></div>
                                            {record.callSuccessful ? "Successful" : "Unsuccessful"}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            {/* side bar sheet  */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent className="max-w-3xl shadow-none space-y-0 gap-0 min-w-3xl w-full !p-0 !m-0 overflow-y-auto  block">
                    <SheetHeader className="!p-0 !m-0">
                        <SheetTitle className="!p-0 !m-0"><span className="sr-only">title</span></SheetTitle>
                        <SheetDescription className="!p-0 !m-0">
                            <span className="sr-only">description</span>
                        </SheetDescription>
                    </SheetHeader>
                    {/* header  */}
                    <div className="w-full h-[72px] 800:flex-row flex-col bg-[#FFFFFF] pl-4 800:px-6 flex items-start 800:items-center justify-center 800:justify-start gap-1 800:gap-6">
                        <h1 className="font-inter font-[600] text-base 800:text-lg 800:leading-[20px] text-[#272727]">
                            Conversation With zudu
                        </h1>
                        <p className="font-inter text-[12px] 800:text-sm font-[400] text-[#787881]">
                            {selectedRecord?.id}
                        </p>
                    </div>
                    {/* line speration  */}
                    <div className="w-full !h-[1px] bg-[#E5E5E8]" />
                    <div className="w-full">
                        <VoiceWave audioURL="/voice.mp3" />
                    </div>
                    {/* line speration  */}
                    <div className="w-full !h-[1px] bg-[#E5E5E8]" />
                    <div className="w-full px-4 800:px-6 pt-6">
                        {/* tabs  */}
                        <div className="w-full border-b-[1px] gap-[15px] border-[#E5E5E8] flex items-center justify-start">
                            {
                                tabs.map((item, index) => (
                                    <button onClick={() => setActiveTab(item)} key={index} className={`font-[600] cursor-pointer transition-all border-b-[1px] border-b-transparent font-inter text-[13px] 800:text-[15px] leading-[16px] text-[#787881] pb-3.5 ${item.value === activeTab.value && "!text-[#111112] !border-b-[#2D2D31]"}`}>
                                        {item.title}
                                    </button>
                                ))
                            }
                        </div>
                        {/* tabs content according to active tab  */}
                        {
                            activeTab.value === "overview"
                            &&
                            <>
                                <div className="w-full py-6">
                                    <h2 className="font-inter font-[600] text-[15px] text-[#111112]">
                                        Summary
                                    </h2>
                                    <p className="mt-2.5 text-[#232324] font-inter font-[400] text-sm">
                                        Zudu introduces itself and inquires about the user. Akash identifies himself and his company, 8848 Digital LLP. He provides his email and expresses interest in learning more about Zudu&apos;s services beyond the listed options. Zudu then begins to describe its AI-powered conversational agent services.
                                    </p>
                                </div>
                                <div className="w-full border-y-[1px] border-y-[#E5E5E8] py-[24px] flex items-center justify-between">
                                    <h3 className="font-inter font-[600] text-[15px] text-[#111112]">
                                        Call Status
                                    </h3>
                                    <Badge variant={"outline"} className="!bg-[#F4F4F5] !rounded-[4px]">
                                        Success
                                    </Badge>
                                </div>
                            </>
                        }
                        {
                            activeTab.value === "transcription"
                            &&
                            <ScrollArea className="h-[400px] 800:h-[382px] w-full">
                                <div className="w-full pt-6">
                                    <div className="space-y-3 800:space-y-4">
                                        {messages.map((message) => (
                                            <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
                                                {message.sender === "bot" && (
                                                    <div className="mr-3 flex-shrink-0">
                                                        <Avatar className="h-[26px] aspect-square w-[26px] bg-white border border-gray-200 flex items-center justify-center">
                                                            <div className="text-black font-bold text-[12px] flex items-center justify-center">Z</div>
                                                        </Avatar>
                                                    </div>
                                                )}
                                                <div
                                                    className={cn(
                                                        "rounded-lg flex items-center justify-start px-4 py-[14px] !gap-3 max-w-[80%]",
                                                        message.sender === "user"
                                                            ? "bg-[#F4F4F5] "
                                                            : "bg-transparent border border-[#E5E5E8] ",
                                                    )}
                                                >
                                                    <p className="text-sm 800:text-[15px] text-[#1B1B1C] font-[400]">{message.content}</p>
                                                    <p className="text-xs 800:text-[13px] text-[#76767F] font-[600] text-right mt-1">{message.timestamp}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollArea>

                        }
                        {
                            activeTab.value === "client-data"
                            &&
                            <div className="w-full py-6">
                                <div className="rounded-md border">
                                    <Table className=" ">
                                        <TableHeader>
                                            <TableRow className="bg-[#FAFAFA]">
                                                <TableHead className="font-[600] !text-[#262E39] !text-sm font-inter  !py-[9px] pl-3 800:pl-[39px]">Dynamic Variables</TableHead>
                                                <TableHead className="font-[600] !text-[#262E39] !text-sm font-inter  !py-[9px]">IDs</TableHead>

                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__conversation_id</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">eHaPZnUjyzQqgUMj06ct</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__call_duration_secs</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">124</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__agent_id</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">XRn3dItHm1SFdo8HhZG7</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__caller_id</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">null</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__time_utc</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">2025-03-25T13:19:35.571394+00:00</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">system__called_number</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">null</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                            </div>
                        }
                        {
                            activeTab.value === "phone-call"
                            &&
                            <div className="w-full py-6">
                                <div className="rounded-md border">

                                    <Table className=" ">
                                        <TableHeader>
                                            <TableRow className="bg-[#FAFAFA]">
                                                <TableHead className="font-[600] !text-[#262E39] !text-sm font-inter  !py-[9px] pl-3 800:pl-[39px]">Call Data</TableHead>
                                                <TableHead className="font-[600] !text-[#262E39] !text-sm font-inter  !py-[9px]">IDs</TableHead>

                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">Direction</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">Inbound</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">Caller Number</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">+1 463 263 5855</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">Receiver Number (Plivo)</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">+1 253 509 7633</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">Call SID</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">CA8ef485e2f1bd99d7ce66c2be2dfa5ff1</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell className="pl-3 800:pl-[39px] py-4 text-sm text-[#262E39] font-[400]">Stream SID</TableCell>
                                                <TableCell className="py-5 text-[#262E39] font-[500] text-[12px]">MZaf3c7c6c2fd1d99bebdfa3bfd17517c4</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                            </div>
                        }
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default CallHistoryPage