import classes from "./CV.module.css";

export default function Skill(props) {
  let iconSkill;
  let listElements;
  switch (props.name) {
    case "software":
      listElements = Object.keys(props.list).map((id) => {
        if (id === "type") {
          return null;
        } else {
          return <li key={id}>{props.list[id]}</li>;
        }
      });
      iconSkill = <i className="fas fa-laptop-code"></i>;
      break;

    case "languages":
      listElements = Object.keys(props.list).map((id) => {
        if (id === "type") {
          return null;
        } else {
          return (
            <li key={id}>
              {id} : {props.list[id]}
            </li>
          );
        }
      });
      iconSkill = <i className="fas fa-apple-alt"></i>;
      break;
    default:
      break;
  }

  return (
    <div>
      <h3>
        {iconSkill} {`${props.name[0].toUpperCase() + props.name.slice(1)}`} :
      </h3>
      <ul className={classes.listSquare}>{listElements}</ul>
    </div>
  );
}
