import React, { useMemo } from "react"
import classes from "./NavComp.module.css"
import logo from '../../images/react-logo.png'
import {Link} from 'react-router-dom'

export default function NavComp(){
  const [selectedNav, setSelectedNav] = React.useState('CV');

  function onClickHandler(event){
    const {name} = event.target;
    setSelectedNav(name);
  }

  const MenuElements = useMemo(()=>{
    return ['CV','Projects','Contact'].map((element,index) => 
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