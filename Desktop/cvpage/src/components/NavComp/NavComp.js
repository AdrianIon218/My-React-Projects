import React, { useEffect, useMemo } from "react"
import classes from "./NavComp.module.css"
import logo from '../../images/react-logo.png'
import {Link, useLocation} from 'react-router-dom'

export default function NavComp(){
  const [selectedNav, setSelectedNav] = React.useState('');
  const currentPage = useLocation().pathname.substring(1);
  const pagesAvailable = ['CV','Projects','Contact'];

  function onClickHandler(event){
    const {name} = event.target;
    setSelectedNav(name);
  }

  useEffect(()=>{
    const indexOfSelectedElement = pagesAvailable.indexOf(currentPage);
    if(indexOfSelectedElement !== -1){
      setSelectedNav(pagesAvailable[indexOfSelectedElement]);
    }
  },[]);

  const MenuElements = useMemo(()=>{
    return pagesAvailable.map((element,index) => 
      (<li  key={index}>
        <Link to={element} 
          className={`${classes.nav_element} ${selectedNav === element && classes.nav_selected}`} 
          name={element}
          onClick={onClickHandler}>
         {element}
        </Link></li>))
  },[selectedNav]);

  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="React" />
      <ul>
        {MenuElements}
      </ul>
    </nav>
  );
}