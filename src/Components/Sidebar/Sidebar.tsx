import { NavLink } from "react-router-dom";

//component
import Overlay from "../UI/Overlay";

//icons
import { BsBuildings, BsEnvelope, BsHouse, BsWallet2 } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { PiBasketThin } from "react-icons/pi";

const sidebarLinks = [
  { title: "صفحه اصلی", to: "/", icon: <BsHouse /> },
  { title: "محصولات", to: "/products", icon: <BsWallet2 /> },
  { title: "کامنت ها", to: "/comments", icon: <BsEnvelope /> },
  { title: "کاربران", to: "/users", icon: <HiOutlineUsers /> },
  { title: "سفارشات", to: "/orders", icon: <PiBasketThin /> },
  { title: "تخفیف ها", to: "/discounts", icon: <BsBuildings /> },
];

//types
import { SidebarProps } from "../../types/common.d";

function Sidebar({ setSidebar, sidebar }: SidebarProps) {
  return (
    <div>
      {/* MENU ITEMS */}
      <aside
        className={`bg-custom-blue text-white h-screen transition-transform fixed ${
          sidebar ? "translate-x-[0px]" : "translate-x-[1000px]"
        } sm:relative sm:translate-x-0 z-20 `}
      >
        <h2 className="p-3 py-4 border-b-2 border-b-[#6c48bb] border-solid font-semibold text-xl mb-5">
          به داشبورد خود خوش آمدید
        </h2>

        <ul>
          {sidebarLinks.map(({ title, to, icon }) => (
            <NavLink
              to={to}
              key={title}
              onClick={() => setSidebar(false)}
              className={({ isActive }) => {
                const styles = `flex items-center my-1 p-3 py-3 text-lg hover:bg-[#391588] first:mb-5 ${
                  isActive && "bg-[#2c106a]"
                }`;
                return styles;
              }}
            >
              <span className="ml-3">{icon}</span>
              {title}
            </NavLink>
          ))}
        </ul>
      </aside>

      {/* BACKGROUND OVERLAY */}
      {sidebar && (
        <Overlay
          className="z-10 sm:hidden"
          actionFunction={() => setSidebar(false)}
          isForSidebar={true}
        />
      )}
    </div>
  );
}

export default Sidebar;
