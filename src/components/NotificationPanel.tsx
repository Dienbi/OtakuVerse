"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Folder, FileText } from "lucide-react"
import { useNavigate } from "react-router-dom";

interface NotificationItemProps {
    avatar?: string
    initials?: string
    name: string
    action: string
    resource: string
    icon: React.ReactNode
    iconLabel: string
    time: string
}

function NotificationItem({ avatar, initials, name, action, resource, icon, iconLabel, time }: NotificationItemProps) {

 const navigate = useNavigate();
    const handle = () => {
        navigate("/notifications");
    };
    

    return (
        <div className="flex gap-3">
            <div className="relative flex-shrink-0">
                {initials ? (
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                        {initials}
                    </div>
                ) : (
                    <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                        <img
                            src={avatar || "/placeholder.svg?height=40&width=40"}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="flex-1">
                <p className="text-sm">
                    <span className="font-semibold">{name}</span> {action} <span className="font-semibold">{resource}</span>
                </p>

                <div className="flex items-center gap-2 mt-2 p-2 bg-gray-100/20 rounded">
                    {icon}
                    <span className="text-xs">{iconLabel}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-pixel">{time}</span>
                    <button onClick={handle} className="text-xs font-pixel text-black font-bold hover:underline">CLICK HERE</button>
                </div>
            </div>
        </div>
    )
}

export default function NotificationPanel() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate(); 

    const togglePanel = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Notification Bell Button */}
            <button onClick={togglePanel} className="relative" aria-label="Toggle notifications">
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
            </button>

            {/* Notification Panel */}
            {isOpen && (
                <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)}>
                    <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

                    <div
                        className="absolute right-0 top-16 translate-x-[-600px] translate-y-[10px] w-[400px] max-h-[600px] overflow-auto rounded-lg shadow-lg z-10 mr-4"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "calc(100vw - 2rem)",
                        }}
                    >
                       
                        <div className="absolute inset-0 z-0 bg-red-800 w-full h-full">
                            <img
                                src="src/assets/backgroundux.png"
                                alt="Backgroundux"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-red-800/70 z-10"></div>
                        <div className="relative z-20 flex flex-col">
                 
                            <div className="flex items-center justify-between p-4 border-b border-red-900/30">
                                <h1 className="text-1xl font-pixel text-black tracking-wider">NOTIFICATIONS</h1>
                                <button onClick={() => { 
    navigate("/notifications");
    setIsOpen(false); 
}}>
    <ArrowRight className="w-6 h-6 text-black" />
</button>
                            </div>

                    
                            <div className="p-4 border-b border-red-900/30">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xxl font-pixel text-black tracking-wider">
                                        UNREAD
                                    </h2>
                                    <button className="text-xs font-pixel text-black hover:underline">
                                        MARK ALL AS READ
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <NotificationItem
                                        avatar="/placeholder.svg?height=40&width=40"
                                        name="Stewie Griffin"
                                        action="invited you to"
                                        resource="Resources_Product_Growth_Org Design.paper"
                                        icon={<FileText className="w-5 h-5 text-blue-300" />}
                                        iconLabel="Resources_Product_Growth_Org Design..."
                                        time={<span className="text-black">{'3 MONTHS AGO'}</span>}
                                    />
                                </div>

                            </div>

                
                            <div className="p-4 bg-red-300/50">
                                <h2 className="text-xxl font-pixel text-black mb-4 tracking-wider">RECENT</h2>

                                <div className="space-y-4">
                                    <NotificationItem
                                        initials="MG"
                                        name="Meg Griffin"
                                        action="invited you to edit the folder"
                                        resource="Logo graphics"
                                        icon={<Folder className="w-5 h-5 text-blue-500" />}
                                        iconLabel="Logo graphics"
                                        time={<span className="text-black">{'01 FEB 2025'}</span>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
