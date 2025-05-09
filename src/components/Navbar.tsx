export default function Navbar() {
    return (
        <nav>
            <div className="w-full h-full flex items-center justify-between px-5 p-4">
                {/* Logo Bar */}
                <div>
                    <p className="text-2xl font-semibold">ระบบขายหน้าร้าน</p>
                </div>
                {/* Detail Bar*/}
                <div className="flex items-center gap-5">
                    <p className="bg-gray-100 py-2 px-4 rounded-full">P</p>
                    <div className="flex flex-col">
                        <p className="font-bold">Name Name</p>
                        <span className="text-sm font-semibold text-white bg-blue-500 px-3 py-1 rounded-md w-fit">
                        Role
                        </span>
                    </div>
                    <div>
                        <p className="bg-gray-100 p-2 rounded-xl">icon</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}