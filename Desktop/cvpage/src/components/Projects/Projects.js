import Card from './Card';
import classes from './Projects.module.css'
import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'

export default function Projects(){
  const userCtx = useContext(UserContext);
  let projects = [];

  if(userCtx.projectsArr){
    projects = [...userCtx.projectsArr];
  }

  const projectsElements = projects.map((project,index)=>{
    return (
      <Card key={index} 
        photoName={project.photoName} 
        link={project.link} 
        category={project.category}
        categories={project.categories}
        description={project.description}
        >
      {project.title}
      </Card>);
    });

  return (
    <section className={classes.cards_container}>
      {projectsElements}
    </section>
  );
}