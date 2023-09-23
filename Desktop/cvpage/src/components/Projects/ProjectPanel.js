import { useEffect, useRef, useState } from 'react';
import classes from './Projects.module.css';

function ProjectPanel(props) {
  const panelRef= useRef();
  const [presentationElements, setPresentation] = useState([]);

  const closePresentation = (e)=>{
    panelRef.current.classList.add(classes.close_panel);
    setTimeout(props.onClosePanel, 600);
  }

  function openCardLink(){
    props.link && window.open(props.link, '_blank');
  }

  useEffect(()=>{/*
    setPresentation(props.presentation.map((element)=>{

     }));*/
  },[]);

  return (
    <div className={classes.backdrop} onClick={closePresentation}>
        <div className={classes.project_presentation} ref={panelRef} onClick={(e => e.stopPropagation())}>
           <h2>{props.title}</h2>
           <button onClick={openCardLink} className={classes.btn_link}>Visit the website</button>
           {presentationElements}
        </div>
        <button className={classes.exit_btn} onClick={closePresentation}>&times;</button>
    </div>
  )
}

export default ProjectPanel;