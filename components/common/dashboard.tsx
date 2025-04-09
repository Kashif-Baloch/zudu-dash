"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CircleCheckBig, PanelRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useSidebar } from "../ui/sidebar"

export default function DashboardPage() {
    const [greeting, setGreeting] = useState("Good morning")
    const { toggleSidebar } = useSidebar()
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        // Update greeting based on time of day
        const updateGreeting = () => {
            const currentHour = new Date().getHours()
            let newGreeting = "Good morning"

            if (currentHour >= 12 && currentHour < 17) {
                newGreeting = "Good afternoon"
            } else if (currentHour >= 17 || currentHour < 5) {
                newGreeting = "Good evening"
            }

            setGreeting(newGreeting)
            setCurrentTime(new Date())
        }

        updateGreeting()
        const intervalId = setInterval(updateGreeting, 60000) // Update every minute

        return () => clearInterval(intervalId)
    }, [])

    // Chart data
    const chartData = [
        { date: "Feb 25", value: 0 },
        { date: "Feb 27", value: 0 },
        { date: "Mar 01", value: 0 },
        { date: "Mar 03", value: 0 },
        { date: "Mar 05", value: 0 },
        { date: "Mar 07", value: 0 },
        { date: "Mar 09", value: 0 },
        { date: "Mar 11", value: 0 },
        { date: "Mar 13", value: 0 },
        { date: "Mar 15", value: 100 },
        { date: "Mar 17", value: 550 },
        { date: "Mar 19", value: 450 },
        { date: "Mar 21", value: 520 },
        { date: "Mar 23", value: 200 },
        { date: "Mar 25", value: 2400 },
        { date: "Mar 27", value: 0 },
    ]

    return (
        <div className="flex h-screen pt-[6rem] bg-white">
            {/* Main content */}
            <div className="flex-1 p-6">
                <div className="flex items-center mb-6 ">
                    <div className="border rounded-full px-4 py-1 flex items-center gap-2">
                        <span className="h-2 w-2 bg-muted/30 rounded-full">
                            <span className="absolute h-2 w-2 bg-black rounded-full animate-ping"></span>
                        </span>
                        <span className="text-sm">Active calls: 0</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="mb-6">
                        <p className="text-sm text-muted-foreground">My Workspace</p>
                        <h1 className="text-3xl font-semibold">{greeting}, Prem</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleSidebar}
                            className="aspect-square size-[40px] border rounded-md group-data-[collapsible=icon]:opacity-0 p-1.5 hover:bg-muted flex items-center justify-center"
                        >
                            <PanelRight className="h-5 w-5" />
                        </button>
                        <Select defaultValue="all-agents">
                            <SelectTrigger className="w-[140px] border bg-muted/30">
                                <SelectValue placeholder="All agents" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all-agents">All agents</SelectItem>
                                <SelectItem value="active-agents">Active agents</SelectItem>
                                <SelectItem value="inactive-agents">Inactive agents</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="last-month">
                            <SelectTrigger className="w-[140px] border bg-muted/30">
                                <SelectValue placeholder="Last month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="last-month">Last month</SelectItem>
                                <SelectItem value="last-week">Last week</SelectItem>
                                <SelectItem value="last-year">Last year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="p-4 rounded-lg gap-1 py-5 h-fit hover:bg-muted/30 shadow-none">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">Number of calls</p>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                <CircleCheckBig className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-3xl font-bold">5,971</p>
                    </Card>
                    <Card className="p-4 rounded-lg gap-1 py-5 h-fit hover:bg-muted/30 shadow-none">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-muted-foreground">Average duration</p>
                        </div>
                        <p className="text-3xl font-bold">0:38</p>
                    </Card>
                    <Card className="p-4 rounded-lg gap-1 py-5 h-fit hover:bg-muted/30 shadow-none">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-muted-foreground">Inbound calls</p>
                        </div>
                        <p className="text-3xl font-bold">3,017</p>
                    </Card>
                    <Card className="p-4 rounded-lg gap-1 py-5 h-fit hover:bg-muted/30 shadow-none">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-muted-foreground">Outbound calls</p>
                        </div>
                        <p className="text-3xl font-bold">2,954</p>
                    </Card>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis dataKey="date" axisLine={true} tickLine={false} tick={{ fontSize: 12 }} />
                            <YAxis
                                axisLine={true}
                                tickLine={false}
                                tick={{ fontSize: 12 }}
                                domain={[0, 2600]}
                                ticks={[0, 650, 1300, 1950, 2600]}
                            />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#000"
                                strokeWidth={1.5}
                                dot={{ r: 4, strokeWidth: 1 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
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
