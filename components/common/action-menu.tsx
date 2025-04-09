"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type DialogType = "importNumber" | "importSipTrunk" | "buyNewNumber" | null

export function ActionMenu() {
    const [dialogType, setDialogType] = useState<DialogType>(null)
    const [open, setOpen] = useState(false)

    const handleOpenDialog = (type: DialogType) => {
        setDialogType(type)
        setOpen(false) // Close the dropdown when opening a dialog
    }

    const handleCloseDialog = () => {
        setDialogType(null)
    }

    const phoneNumbers = [
        { price: "$15/month", location: "Belvedere, CA", number: "(415) 797-0173" },
        { price: "$15/month", location: "Belvedere, CA", number: "(415) 599-1798" },
        { price: "$15/month", location: "Belvedere, CA", number: "(415) 903-1573" },
    ]

    return (
        <div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                        <span className="sr-only">More options</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleOpenDialog("importNumber")}>Import Number</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenDialog("importSipTrunk")}>Import Sip Trunk</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenDialog("buyNewNumber")}>Buy A New Number</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Import Number Dialog */}
            <Dialog open={dialogType === "importNumber"} onOpenChange={handleCloseDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Import Number</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="phone-number">Phone Number</Label>
                            <Input id="phone-number" placeholder="Enter Phone Number" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone-number">Twilio Account SID</Label>
                            <Input id="phone-number" placeholder="Enter Twilio Account SID" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone-number">Twilio Auth Token</Label>
                            <Input id="phone-number" placeholder="Enter Twilio Auth Token" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCloseDialog}>
                            Cancel
                        </Button>
                        <Button>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Import Sip Trunk Dialog */}
            <Dialog open={dialogType === "importSipTrunk"} onOpenChange={handleCloseDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Import Sip Trunk</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="sip-phone">Phone Number</Label>
                            <Input id="sip-phone" placeholder="Enter SIP Phone Number" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sip-origination">Origination URI</Label>
                            <Input id="sip-origination" placeholder="Enter Origination URI" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sip-term">Termination URI</Label>
                            <Input id="sip-term" placeholder="Enter Termination URI" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sip-username">SIP Trunk Username</Label>
                            <Input id="sip-username" placeholder="Enter SIP Trunk Username" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sip-pass">SIP Trunk Password</Label>
                            <Input id="sip-pass" type="password" placeholder="Enter SIP Trunk Password" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCloseDialog}>
                            Cancel
                        </Button>
                        <Button>Import</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Buy A New Number Dialog */}
            {/* <Dialog open={dialogType === "buyNewNumber"} onOpenChange={handleCloseDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Buy A New Number</DialogTitle>
                    </DialogHeader>
                    <div className="flex ">
                        <div className="grid gap-2 w-1/2">
                            <Label htmlFor="area-code">Area Code</Label>
                            <Input id="area-code" placeholder="e.g. 415" />
                        </div>
                        <div className="grid gap-2 w-1/2 ml-4">
                            <Label htmlFor="number-type">Country</Label>
                            <Select>
                                <SelectTrigger id="number-type">
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="usa">USA</SelectItem>
                                    <SelectItem value="uk">UK</SelectItem>
                                    <SelectItem value="uae">UAE</SelectItem>
                                    <SelectItem value="international">International</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4">
                                    <span>$15/month</span>
                                    <span>Belvedere, CA</span>
                                    <span>(415) 797-8678</span>
                                </div>
                            ))
                        }
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCloseDialog}>
                            Cancel
                        </Button>
                        <Button>Purchase</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog> */}

            <Dialog open={dialogType === "buyNewNumber"} onOpenChange={handleCloseDialog}>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden">
                    <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-4">
                            <DialogTitle className="text-xl font-semibold">Buy a new number</DialogTitle>

                        </div>

                        <p className="text-base mb-4">Enter details</p>

                        <div className="flex gap-4 mb-6">
                            <Input placeholder="Area Code" className="flex-1" />
                            <Select>
                                <SelectTrigger className="flex-1">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="px-6">
                        {phoneNumbers.map((phone, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 border rounded-lg mb-3 bg-gray-200 cursor-pointer"
                            >
                                <span className="font-medium text-sm">{phone.price}</span>
                                <span className="text-sm text-gray-500">{phone.location}</span>
                                <span className="font-medium">{phone.number}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 flex justify-end">
                        <Button className="bg-black hover:bg-black/90 text-white">Purchase</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
