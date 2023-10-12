import classes from "./CV.module.css";
import useDateFormated from "./useDateFormated";

export default function Job(props) {
  const startDateFormated = useDateFormated(props.startDate);
  const endDateFormated = useDateFormated(props.endDate);

  return (
    <div>
      <h3 className={classes.elementsAligned}>
        <i className="fas fa-business-time" />
        {props.position}
      </h3>
      <ul>
        <li>Company : {props.companyName}</li>
        <li>Period : {`${startDateFormated} - ${endDateFormated}`}</li>
        <li>Location : {props.location}</li>
        <li>
          Description :{" "}
          <span className={classes.description}>- {props.description}</span>
        </li>
      </ul>
    </div>
  );
}
