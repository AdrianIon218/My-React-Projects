import classes from "./CV.module.css";

export default function Education(props) {
  return (
    <div className={classes.divColumn}>
      <h3 className={`${classes.elementsAligned} ${classes["no-margin-y"]}`}>
        <i className="fas fa-school" />
        {props.universityName}
      </h3>
      <ul className={classes["no-margin-top"]}>
        <li>{props.facultyName}</li>
        <li>Degree : {props.degree}</li>
        <li>Field of Study : {props.fieldOfStudy}</li>
        <li>Period : {props.period}</li>
      </ul>
    </div>
  );
}
