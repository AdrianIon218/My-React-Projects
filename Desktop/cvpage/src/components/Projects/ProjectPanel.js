import { useRef } from 'react';
import classes from './Projects.module.css'

function ProjectPanel(props) {
  const panelRef= useRef();

  const closePresentation = (e)=>{
    panelRef.current.classList.add(classes.close_panel);
    setTimeout(props.onClosePanel, 600);
  }

  return (
    <div className={classes.backdrop}>
        <div className={classes.project_presentation} ref={panelRef}>
           hei
        </div>
        <button className={classes.exit_btn} onClick={closePresentation}>&times;</button>
    </div>
  )
}

export default ProjectPanel;