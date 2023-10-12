import classes from "./Button.module.css";
import { Link } from "react-router-dom";

export default function ButtonIcon(props) {
  return (
    <>
      {props.linkExternalPage ? (
        <img
          onClick={() => window.open(props.linkExternalPage, "_blank")}
          className={classes.icon}
          src={props.img}
          alt={props.alt}
        />
      ) : (
        <Link to={props.linkInternalPage}>
          <img className={classes.icon} src={props.img} alt={props.alt} />
        </Link>
      )}
    </>
  );
}
