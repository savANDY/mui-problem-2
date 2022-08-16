import React from "react";
import Menu from "./Menu";
import MenuOptions from "./Menu/elements";

const Layout = () => {
  return (
    <Menu
      state={{ isOpen: false }}
      events={{ closeMenu: () => {} }}
      menuOptions={MenuOptions}
    />
  );
};

export default Layout;
