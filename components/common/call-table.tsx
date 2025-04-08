"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Search, User } from "lucide-react"
import { useState } from "react"
import Header from "./header"

interface CallRecord {
    time: string
    duration: string
    type: string
    cost: string
    disconnection: string
    callStatus: string
    callSuccessful: boolean | null
}

const CallHistoryPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedAgent, setSelectedAgent] = useState("all")
    const [selectedTimeframe, setSelectedTimeframe] = useState("last-month")

    const callRecords: CallRecord[] = [
        {
            time: "03/20/2025 22:00",
            duration: "0:10",
            type: "phone_call",
            cost: "$0.023",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: true,
        },
        {
            time: "03/17/2025 22:35",
            duration: "0:08",
            type: "phone_call",
            cost: "$0.019",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: false,
        },
        {
            time: "03/15/2025 14:22",
            duration: "0:15",
            type: "phone_call",
            cost: "$0.031",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: true,
        },
        {
            time: "03/12/2025 09:45",
            duration: "0:11",
            type: "phone_call",
            cost: "$0.025",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: true,
        },
        {
            time: "03/10/2025 17:33",
            duration: "0:07",
            type: "phone_call",
            cost: "$0.016",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: false,
        },
        {
            time: "03/08/2025 12:18",
            duration: "0:13",
            type: "phone_call",
            cost: "$0.027",
            disconnection: "user hangup",
            callStatus: "ended",
            callSuccessful: true,
        },
    ]
    return (
        <div className='w-full'>
            {/* top  */}
            <Header title="Call History" />
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
                    <div className="flex flex-wrap !gap-3 w-full md:w-auto">
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

                <div className="border rounded-md">
                    <Table>
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
                                <TableRow key={index}>
                                    <TableCell className="pl-[17px] py-3.5">{record.time}</TableCell>
                                    <TableCell className="py-3.5">{record.duration}</TableCell>
                                    <TableCell className="py-3.5">{record.type}</TableCell>
                                    <TableCell className="py-3.5">{record.cost}</TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                            {record.disconnection}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                                            {record.callStatus}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3.5">
                                        <div className="flex items-center">
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
        </div>
    )
}

export default CallHistoryPage