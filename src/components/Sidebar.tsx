import { RiDashboard3Fill } from "react-icons/ri";
import { FaShoppingCart, FaBoxes, FaTags, FaUsers, FaPercentage, FaHistory, } from "react-icons/fa";
import { FaUsersGear, FaGift, } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const menu = [
  {
    title: "แดชบอร์ด",
    icon: <RiDashboard3Fill/>,
    link: "/",
  },
  {
    title: "ขายสินค้า",
    icon: <FaShoppingCart/>,
    link: "/",
  },
  {
    title: "จัดการสินค้า",
    icon: <FaBoxes/>,
    link: "/",
  },
  {
    title: "หมวดหมู่สินค้า",
    icon: <FaTags />,
    link: "/",
  },
  {
    title: "จัดการลูกค้า",
    icon: <FaUsers />,
    link: "/",
  },
  {
    title: "โปรโมชั่น",
    icon: <FaPercentage />,
    link: "/",
  },
  {
    title: "จัดการผู้ใช้",
    icon: <FaUsersGear />,
    link: "/",
  },
  {
    title: "อัตราการแลกแต้ม",
    icon: <FaGift />,
    link: "/",
  },
  {
    title: "ประวัติการขาย",
    icon: <FaHistory />,
    link: "/",
  },
  {
    title: "นับสต็อก",
    icon: <FaBoxes/>,
    link: "/",
  },
];

export default function Sidebar() {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex items-center justify-between p-5 h-[78px] bg-gray-900">
          <p className="text-[#f8f9fc] text-xl">POS System</p>
          <GiHamburgerMenu className="text-[#f8f9fc] w-[25px] h-[20px] cursor-pointer duration-300 hover:text-white hover:scale-120 " />
        </div>
        <div className="h-[calc(100vh-78px)] p-5 bg-gray-800">
          <ul className="flex flex-col gap-2">
            {menu.map((item, index) =>(
                <li 
                className="flex p-2 gap-5 items-center text-[#f8f9fc] text-lg cursor-pointer duration-300 hover:bg-gray-700 rounded-md" 
                key={index}
                >
                {item.icon}
                <p>{item.title}</p>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
