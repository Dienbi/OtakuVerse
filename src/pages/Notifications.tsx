import { Trash2, Settings } from "lucide-react"

interface NotificationItem {
    id: string
    title: string
    timeAgo: string
    type: "view"
}

const notifications: NotificationItem[] = [
    {
        id: "1",
        title: "Peter's Big Cool Idea",
        timeAgo: "about 13 hours ago",
        type: "view",
    },
    {
        id: "2",
        title: "Peters' House of Munch Menu",
        timeAgo: "about 2 days ago",
        type: "view",
    },
    {
        id: "3",
        title: "Brian is so annoying",
        timeAgo: "about 1 year ago",
        type: "view",
    },
]

export default function NotificationsPage() {
    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: "linear-gradient(to bottom, #DD8B8B, #774B4B)",
            }}
        >
            {/* Push Notifications Banner */}
            <div className="mx-auto max-w-4xl mt-20 px-8">
                <div
                    className="rounded-lg p-4"
                    style={{
                        width: "1034px",
                        height: "57px",
                        position: "absolute",
                        top: "133px",
                        left: "198px",
                        borderRadius: "16px",
                        backgroundColor: "#BF2E2E26",
                        backdropFilter: "blur(4px)",
                    }}
                >

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">

                            <p className="text-black font-Inknut Antiqua text-[15px] translate-x-[60px]"> 🔔   Enable push notifications and never miss an update!</p>
                        </div>
                        <div className="flex gap-4">
                            <div
                                style={{
                                    width: "221px",
                                    height: "27px",
                                    position: "absolute",
                                    top: "18px",
                                    left: "708px",
                                    borderRadius: "7992px",
                                    border: "1px solid #6C668540",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "5.8px 75px 7.2px 18px",
                                }}
                            >
                                <button
                                    className="text-black font-pixel text-[10px] px-4 py-2 rounded hover:opacity-90"
                                >
                                    ALLOW PUSH NOTIFICATIONS
                                </button>
                                <button
                                    className="text-black font-pixel text-[10px] px-4 py-2 rounded hover:opacity-90"

                                >
                                    DISMISS
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <h1 className="text-[25px] font-pixel text-black translate-x-[-80px]">NOTIFICATIONS</h1>
                        <div className="flex items-center gap-6">
                            <button className="text-black -700 font-pixel text-[12px] hover:opacity-80 shadow-md"
                                style={{
                                    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)", // Ombre floue et marquée
                                    background: "transparent", // Bouton sans fond
                                    border: "none", // Suppression des bordures
                                    outline: "none",
                                }}>

                                MARK ALL AS READ
                            </button>

                            <button className="text-gray-700 hover:opacity-80">
                                <Settings className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Recent Section */}
                    <div>
                        <h2 className="text-[24px] font-pixel text-black mb-8 translate-x-[-40px]">RECENT</h2>
                        <div className="space-y-0">
                            {notifications.map((notification) => (
                                <div key={notification.id} className="py-4 border-b" style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">

                                            <span className="text-black font-inter text-[14px]">🎉 First view on Peters’ </span>
                                            <span className="text-black font-inter text-[14px] font-bold">
                                                {notification.title}
                                            </span>


                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="text-black font-pixel text-[10px] px-6 py-2 rounded hover:opacity-90"
                                                style={{
                                                    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)", // Ombre floue et marquée
                                                    background: "transparent", // Bouton sans fond
                                                    border: "none", // Suppression des bordures
                                                    outline: "none",
                                                }}
                                            >
                                                VIEW IT
                                            </button>

                                            <button className="text-black hover:text-red-400">
                                                <Trash2
                                                    className="w-5 h-5"
                                                    style={{
                                                        filter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.8))",
                                                    }}
                                                />
                                            </button>

                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 ml-1">
                                        <div
                                            className="w-6 h-6 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: "rgba(120, 60, 80, 0.8)" }}
                                        >
                                            <span className="text-xs text-white">S</span>
                                        </div>
                                        <span className="text-gray-600 text-sm">Someone watched • {notification.timeAgo}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

