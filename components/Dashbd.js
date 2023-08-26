import classNames from "classnames";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashbd = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    React.createElement("div", {
      className: classNames({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      }),
    },
    React.createElement(Sidebar, {
      collapsed: collapsed,
      setCollapsed: setSidebarCollapsed,
      shown: showSidebar,
    }),
    React.createElement("div", { className: "" },
      React.createElement(Navbar, { onMenuButtonClick: () => setShowSidebar((prev) => !prev) }),
      props.children))
  );
};

export default Dashbd;
