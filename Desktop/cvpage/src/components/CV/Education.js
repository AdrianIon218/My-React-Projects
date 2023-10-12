import classes from "./CV.module.css";

export default function Education(props) {
  return (
    <div className={classes.divColumn}>
      <h3 className={classes.elementsAligned}>
        <i className="fas fa-school" />
        {props.universityName}
      </h3>
      <ul>
        <li>{props.facultyName}</li>
        <li>Degree : {props.degree}</li>
        <li>Field of Study : {props.fieldOfStudy}</li>
      </ul>
    </div>
  );
}
