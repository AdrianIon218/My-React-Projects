import classes from "./Projects.module.css";
import categoryPhotos from "./CategoryPhotos";
import ProjectPanel from "./ProjectPanel";
import { useState } from "react";

export default function Card(props) {
  const [isProjectPanelShown, setProjectPanel] = useState(false);

  function onCardClick() {
    if (props.presentation) {
      setProjectPanel(true);
    } else {
      window.open(props.link, "_blank");
    }
  }

  function onClosePanel() {
    setProjectPanel(false);
  }

  const categories = Object.keys(props.categories).map((key, index) => {
    const categoryName = props.categories[key];

    const category = categoryPhotos.filter(
      (category) => category.Name.toLowerCase() === categoryName.toLowerCase()
    );

    return category.length > 0 ? (
      <img
        key={index}
        alt={category[0].Name}
        className={classes.category_container}
        src={require(`../../images/${category[0].Photo}`)}
      />
    ) : (
      <div key={index} className={classes.category_container}>
        {categoryName}
      </div>
    );
  });

  const tooltiptext = props.description;

  return (
    <>
      {isProjectPanelShown && (
        <ProjectPanel
          onClosePanel={onClosePanel}
          content={props.presentation}
          title={props.children}
          link={props.link}
        />
      )}
      <div className={classes.CardElement} onClick={onCardClick}>
        <div className={classes.row_container}>{categories}</div>
        <div className={classes.card}>
          <img
            src={require(`../../images/${props.photoName}`)}
            alt={props.photoName}
          />
          <label>{props.children}</label>
        </div>
        <span
          className={classes.tooltiptext}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {tooltiptext}
        </span>
      </div>
    </>
  );
}
