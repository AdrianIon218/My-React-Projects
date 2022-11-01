import classes from './CV.module.css'

export default function Education(props){
  return (
    <div className={`${classes.divColumn} ${classes.divSection}`}>
    <h2 className={classes.title}>
      <i className="fas fa-graduation-cap">&nbsp;Education</i>
    </h2>
    <h3>
      <i className='fas fa-school'></i>{props.universityName}
    </h3>
    <ul>
      <li>{props.facultyName}</li>
      <li>Degree : {props.degree}</li>
      <li>Field of Study : {props.fieldOfStudy}</li>
    </ul>
    </div>
  );
}