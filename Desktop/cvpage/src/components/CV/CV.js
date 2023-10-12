import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Profile from "./Profile";
import SkillList from "./SkillList";
import EducationList from "./EducationList";
import JobsList from "./JobsList";

export default function CV() {
  const userCtx = useContext(UserContext);
  const { cvData, educationArr, skillsArr, jobsArr } = userCtx;

  return (
    <section>
      {cvData && <Profile {...cvData} />}

      {educationArr && <EducationList educationArr={educationArr} />}

      {skillsArr && <SkillList skillsArr={skillsArr} />}

      {jobsArr && <JobsList jobsArr={jobsArr} />}
    </section>
  );
}
