import classes from "./CV.module.css";
import Job from "./Job.js";

export default function JobsList({ jobsArr: arr }) {
  const jobsElements = arr.map((job, index) => {
    return <Job key={index} {...job} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-briefcase" />
        &nbsp;Work experience
      </h2>
      {jobsElements}
    </section>
  );
}
