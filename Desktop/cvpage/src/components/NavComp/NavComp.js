import React, { useEffect, useMemo } from "react";
import classes from "./NavComp.module.css";
import logo from "../../images/react_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../Context/NavContext";

export default function NavComp() {
  const navCtx = useContext(NavContext);
  const currentPage = useLocation().pathname.substring(1);
  const pagesAvailable = ["CV", "Projects", "Contact"];

  function onClickHandler(event) {
    const { name } = event.target;
    navCtx.setNav(name);
  }

  useEffect(() => {
    navCtx.setNav(currentPage);
  }, [currentPage]);

  const MenuElements = useMemo(() => {
    return pagesAvailable.map((element, index) => (
      <li key={index}>
        <Link
          to={element}
          className={`${classes.nav_element} ${
            navCtx.currentNav === element && classes.nav_selected
          }`}
          name={element}
          onClick={onClickHandler}
        >
          {element}
        </Link>
      </li>
    ));
  }, [navCtx]);

  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="React" />
      <ul>{MenuElements}</ul>
    </nav>
  );
}
