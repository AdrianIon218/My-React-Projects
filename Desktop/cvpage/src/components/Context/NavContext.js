import { createContext, useState } from "react";

export const NavContext = createContext();

function NavContexProvider(props) {
  const [currentNav, setCurrentNav] = useState("CV");
  const pagesAvailable = ["CV", "Projects", "Contact"];

  const navCtx = {
    currentNav: currentNav,
    setNav: (val) => {
      const indexOfSelectedElement = pagesAvailable.indexOf(val);
      if (indexOfSelectedElement !== -1) {
        setCurrentNav(pagesAvailable[indexOfSelectedElement]);
      }
    },
  };

  return (
    <NavContext.Provider value={navCtx}>{props.children}</NavContext.Provider>
  );
}

export default NavContexProvider;
