import { AiOutlineMenu } from "react-icons/ai";
import ProfilePic from "/img/profilePic.jfif";

//component
import Button from "../UI/Button";

//icons
import { BsBell, BsSun } from "react-icons/bs";
//type
import { SidebarProps } from "../../types/common.d";

//helperFn
import darkModeHandler from "../../helpers/darkmodeFn";


function Header({ setSidebar }: SidebarProps) {
  return (
    <header>
      <nav className="flex items-center">
        {/* HUMBERGER MENU */}
        <button
          className="block sm:hidden p-3"
          onClick={() => setSidebar((prev: boolean) => !prev)}
        >
          <AiOutlineMenu size={25} />
        </button>
        {/* profile section - LEFT */}
        <section className="flex gap-x-4 p-2 items-center">
          <img
            className="rounded-full w-10 md:w-12"
            src={ProfilePic}
            alt="profile-Picture"
          />
          <div className="">
            <h3 className="text-sm md:text-lg">محمد امین سعیدی راد</h3>
            <p className="text-xs md:text-base text-[#656363] dark:text-white">
              برنامه نویس فرانت اند
            </p>
          </div>
        </section>

        {/* action section - RIGHT */}
        <section className="mr-auto flex items-center gap-x-3 ">
          <div className="md:block hidden ">
            <label
              htmlFor="search"
              className="bg-white rounded-md py-3 relative outline-none cursor-pointer lg:px-8"
            >
              <input
                className="focus:outline-none pr-3 lg:pr-0"
                type="search"
                name="search"
                id="search"
                placeholder="جست و جو کنید..."
              />
              <Button className=" absolute top-[50%] left-0 translate-y-[-50%] ml-1">
                سرچ کنید
              </Button>
            </label>
          </div>

          <div className="flex gap-x-3">
            <Button className="p-3 rounded-md "><BsBell /></Button>
            <Button onClick={() => darkModeHandler()} className="p-3 rounded-md "><BsSun /></Button>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Header;
