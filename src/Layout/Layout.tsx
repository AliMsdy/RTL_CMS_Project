import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

function Layout() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="sm:flex relative">
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <main className="flex-1 px-2 lg:px-5 overflow-y-hidden h-screen">
        <Header setSidebar={setSidebar} />
        <div className="h-screen overflow-y-auto pb-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
