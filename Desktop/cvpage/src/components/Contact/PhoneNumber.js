import classes from "./Contact.module.css";

export default function PhoneNumber(props) {
  return (
    <div className={classes.divRowCentered}>
      <i className={`fa fa-phone ${classes.icon}`} aria-hidden="true" />
      <img
        className={`${classes.phoneNationality} ${classes.icon}`}
        src={require(`../../images/${props.photoName}`)}
        alt={props.alt}
      />
      <div>{props.children}</div>
    </div>
  );
}
