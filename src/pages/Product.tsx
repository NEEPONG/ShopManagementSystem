import { FaSearch, FaRedo, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Product() {
  return (
    <>
      <div className="bg-slate-100 h-screen w-full">
        {/* Header */}
        <div className="grid grid-cols-2 font-kanit p-5 w-full">
          <label className="justify-self-start text-[40px] font-bold">
            จัดการสินค้า
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-self-end w-40 h-10 mt-2 gap-x-2">
            <FaPlus />
            เพิ่มสินค้าใหม่
          </button>
        </div>
        {/* Search And Filter */}
        <div className="font-kanit p-5 w-full">
          <form className="flex items-end gap-x-4 bg-white p-5 rounded-md border-2 border-gray-300">
            {/* ช่องค้นหา */}
            <div className="flex flex-col flex-1">
              <label htmlFor="search" className="font-bold">
                ค้นหา
              </label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="ชื่อสินค้า หรือคำอธิบาย..."
                className="border-2 border-gray-300 rounded-md p-2 h-10 mt-1"
              />
            </div>
            {/* หมวดหมู่ */}
            <div className="flex flex-col flex-1">
              <label htmlFor="category" className="font-bold">
                หมวดหมู่
              </label>
              <select
                id="category"
                name="category"
                className="border-2 border-gray-300 rounded-md p-2 h-10 mt-1"
                required
              >
                <option value="all" disabled>
                  ทั้งหมด
                </option>
                <option value="electronics">อิเล็กทรอนิกส์</option>
                <option value="fashion">แฟชั่น</option>
                <option value="home">ของใช้ในบ้าน</option>
                <option value="beauty">ความงาม</option>
              </select>
            </div>
            {/* ปุ่มค้นหา */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center gap-x-2"
            >
              <FaSearch />
              ค้นหา
            </button>
            {/* ปุ่มรีเซ็ต */}
            <button
              type="reset"
              className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center gap-x-2"
            >
              <FaRedo />
              รีเซ็ต
            </button>
          </form>
        </div>
        {/* Products Table */}
        <div className="p-5">
          <table className="table-fixed border-collapse border border-gray-300 bg-white w-full mt-4 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-white h-14">
              <tr className="text-left">
                <th className="px-4">รูปภาพ</th>
                <th className="px-4">ชื่อสินค้า</th>
                <th className="px-4">หมวดหมู่</th>
                <th className="px-4">ราคาขายปลีก</th>
                <th className="px-4">ราคาขายส่ง</th>
                <th className="px-4">สต็อก</th>
                <th className="px-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="h-16 bg-gray-200">
                <td className="px-4">Image 1</td>
                <td className="px-4">Iphone 16 pro</td>
                <td className="px-4">มือถือ</td>
                <td className="px-4">40,000.00 บาท</td>
                <td className="px-4">45,999.00 บาท</td>
                <td className="px-4">
                  <p className="bg-green-600 w-10 h-5 text-center text-white rounded-md font-bold">
                    100
                  </p>
                </td>
                <td className="px-4">
                  <div className="flex justify-center gap-x-3 text-blue-600">
                    <FaEye className="cursor-pointer bg-cyan-600 text-white rounded-md w-8 h-8" />
                    <FaEdit className="cursor-pointer bg-yellow-500 text-white rounded-md w-8 h-8" />
                    <FaTrash className="cursor-pointer bg-red-500 text-white rounded-md w-8 h-8" />
                  </div>
                </td>
              </tr>
              <tr className="h-16 hover:bg-gray-50">
                <td className="px-4">Image 2</td>
                <td className="px-4">Iphone 15 pro</td>
                <td className="px-4">มือถือ</td>
                <td className="px-4">40,000.00 บาท</td>
                <td className="px-4">45,999.00 บาท</td>
                <td className="px-4">
                  <p className="bg-green-600 w-10 h-5 text-center text-white rounded-md font-bold">
                    1
                  </p>
                </td>
                <td className="px-4">
                  <div className="flex justify-center gap-x-3">
                    <FaEye className="cursor-pointer bg-cyan-600 text-white rounded-md w-8 h-8" />
                    <FaEdit className="cursor-pointer bg-yellow-500 text-white rounded-md w-8 h-8" />
                    <FaTrash className="cursor-pointer bg-red-500 text-white rounded-md w-8 h-8" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
