import { useRef } from "react";
import classes from "./Projects.module.css";
import CustomedLink from "./CustomedLink";

function ProjectPanel(props) {
  const panelRef = useRef();
  const {description, github, bitbucket } = props.content;
  const isNotThePortfolioPage = props.title !== "Portfolio";
  const paragraphsDescription = Object.entries(description).map((item,index)=>(<p key={item[0]}>{item[1]}</p>));

  const closePresentation = (e) => {
    panelRef.current.classList.add(classes.close_panel);
    setTimeout(props.onClosePanel, 600);
  };

  function openCardLink() {
    props.link && window.open(props.link, "_blank");
  }

  return (
    <div className={classes.backdrop} onClick={closePresentation}>
      <div className={classes.project_presenation__container} ref={panelRef}>
        {!isNotThePortfolioPage && (
          <div className={classes.current_page_indicator}>
            {" "}
            The current page
          </div>
        )}
        <div
          className={classes.project_presentation}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{props.title}</h2>
          {isNotThePortfolioPage && (
            <button onClick={openCardLink} className={classes.btn_link}>
              Visit the website
            </button>
          )}
          {paragraphsDescription.length > 0 && paragraphsDescription}
          <div>
            {github && (
              <CustomedLink link={github.link} svg={"github"}>
                {github.text}
              </CustomedLink>
            )}
            {bitbucket && (
              <CustomedLink link={bitbucket.link} svg={"bitbucket"}>
                {bitbucket.text}
              </CustomedLink>
            )}
          </div>
        </div>
        <button
          className={classes.project_presenation__exit}
          onClick={closePresentation}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ProjectPanel;
