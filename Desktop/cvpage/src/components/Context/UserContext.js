import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export function UserContextProvider(props){
  const [userData, setUserData] = useState(false);

  const currentContext = {
    cvData:false,
    footerData:false,
    contactArr:false,
    projectsArr:false,
    educationArr:false,
  }

  React.useEffect(()=>{
    fetch('https://cv-app-801f5-default-rtdb.firebaseio.com/user/-NF_N1OMDXThfHFuhOj8.json')
    .then(resData=>resData.json())
    .then(data =>{
      setUserData(data);
    });
  },[]);

  if(userData!==false){
    currentContext.cvData = { name: userData.name, photoProfile: userData.photoProfile,
      address: userData.address, birthdate: userData.birthdate, jobTitle: userData.jobTitle };

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
  }

  return (
    <UserContext.Provider value={currentContext}>
    {props.children}
    </UserContext.Provider>);
}