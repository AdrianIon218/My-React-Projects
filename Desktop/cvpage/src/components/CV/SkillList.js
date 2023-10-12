import Skill from "./Skill";
import classes from "./CV.module.css";

export default function SkillList({ skillsArr: arr }) {
  const skillsElements = arr.map((skill, index) => {
    return <Skill key={index} name={skill.type} list={{ ...skill }} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-award" />
        &nbsp;Skills
      </h2>
      {skillsElements}
    </section>
  );
}
