import Education from "./Education";
import classes from "./CV.module.css";

export default function EducationList({ educationArr: arr }) {
  const educationElements = arr.map((item, index) => {
    return <Education key={index} {...item} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-graduation-cap" />
        &nbsp;Education
      </h2>
      {educationElements}
    </section>
  );
}
