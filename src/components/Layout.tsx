import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-screen">
            <div className="fixed top-0 left-0 w-[250px] h-full z-20">
                {/* Sidebar (fixed) */}
                <Sidebar />
            </div>
            <div className="ml-[250px] h-screen flex flex-col">
                {/* Navbar (fixed) */}
                <div className="fixed top-0 left-[250px] right-0 w-[calc(100vw-250px)] h-[78px] bg-white shadow-md z-10">
                    <Navbar />
                </div>
                {/* Scrollable content */}
                <div className="pt-[78px] w-[calc(100vw-250px)] overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}