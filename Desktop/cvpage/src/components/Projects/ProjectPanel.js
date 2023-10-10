import { useRef } from 'react';
import classes from './Projects.module.css';
import CustomedLink from './CustomedLink';

function ProjectPanel(props) {
  const panelRef= useRef();
  const {description, problems, github} = props.content;
  const isThePortfolioPage = props.title !== "Portfolio";

  const closePresentation = (e)=>{
    panelRef.current.classList.add(classes.close_panel);
    setTimeout(props.onClosePanel, 600);
  }

  function openCardLink(){
    props.link && window.open(props.link, '_blank');
  }

  return (
    <div className={classes.backdrop} onClick={closePresentation}>
      <div className={classes.project_presenation__container} ref={panelRef}>
        {!isThePortfolioPage && <div className={classes.current_page_indicator}> The current page</div>}
        <div className={classes.project_presentation} onClick={(e => e.stopPropagation())}>
           <h2>{props.title}</h2>
           {isThePortfolioPage && <button onClick={openCardLink} className={classes.btn_link}>Visit the website</button>}
           {description && <p> {description} </p>}
           {github && 
            <CustomedLink link={github} svg={"github"}>
              Github repository
            </CustomedLink>}
        </div>
        <button className={classes.project_presenation__exit} onClick={closePresentation}>&times;</button>
      </div>
    </div>
  )
}

export default ProjectPanel;