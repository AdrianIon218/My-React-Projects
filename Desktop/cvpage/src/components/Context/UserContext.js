import { createContext, useState } from "react";
import React from "react";
import { PERSONAL_DATA } from "../../PrivateData";

export const UserContext = createContext();

export function UserContextProvider(props){
  const [userData, setUserData] = useState(false);

  const currentContext = {
    cvData:false,
    footerData:false,
    contactArr:false,
    projectsArr:false,
    educationArr:false,
    skillsArr:false,
    jobsArr:false
  }

  React.useEffect(()=>{
    fetch(PERSONAL_DATA)
    .then(resData=>resData.json())
    .then(data =>{
      setUserData(data);
    });
  },[]);

  if(userData!==false){
    currentContext.cvData = { name: userData.name, photoProfile: userData.photoProfile,
      address: userData.address, birthdate: userData.birthdate, jobTitle: userData.jobTitle , nationality: userData.nationality, isEuropean: userData.isEuropean };

    currentContext.footerData = { name: userData.name, linkedinLink: userData.linkedinLink};

    currentContext.contactArr = Object.keys(userData.contacts).map(
      (id)=>({...userData.contacts[id]})
    );

    currentContext.projectsArr = Object.keys(userData.projects).map(
      (id)=>({...userData.projects[id]})
    );

    currentContext.educationArr = Object.keys(userData.education).map(
      (id)=>({...userData.education[id]})
    );

    currentContext.skillsArr = Object.keys(userData.skills).map(
      (id)=>({type:id, ...userData.skills[id]})
    );

    currentContext.jobsArr = Object.keys(userData.jobs).map(
      (id)=>({...userData.jobs[id]})
    );
  }

  return (
    <UserContext.Provider value={currentContext}>
    {props.children}
    </UserContext.Provider>);
}