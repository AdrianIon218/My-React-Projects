import React from "react"
import classes from "./NavComp.module.css"
import logo from '../../images/react-logo.png'
import {Link, useLocation} from 'react-router-dom'

export default function NavComp(){
  const [selectedNav, setSelectedNav] = React.useState('');

  const styles = {
    textDecoration : 'underline 3px',
    textDecorationStyle: 'dashed',
    textUnderlinePosition: 'under',
    textUnderlineOffset: '2px'
  }

  function onClickHandler(event){
    const {name} = event.target;
    setSelectedNav(name);
  }

  const currentPage = useLocation().pathname.substring(1);

  if(selectedNav !== currentPage){
    setSelectedNav(currentPage);
  }

  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="React" />
      <ul>
        <li>
          <Link to='CV' className={classes.nav_element} name='CV'
            style={selectedNav === 'CV' || selectedNav === '' ? styles : null}
            onClick={onClickHandler}>CV</Link>
        </li>
        <li>
          <Link to='Projects' className={classes.nav_element} name='Projects'
            style={selectedNav === 'Projects' ? styles : null}
            onClick={onClickHandler}>Projects</Link>
        </li>
        <li>
          <Link to='Contact' className={classes.nav_element} name='Contact'
            style={selectedNav === 'Contact' ? styles : null}
            onClick={onClickHandler}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}