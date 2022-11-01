import classes from './Projects.module.css'
import categoryPhotos from './CategoryPhotos'

export default function Card(props){
  function openPage(){
    window.open(props.link, '_blank');
  } 

  let categoryElement;

  const category = categoryPhotos.filter(category=>category.Name === props.category);
  
  if(category.length > 0){
    categoryElement = <img src={require(`../../images/${category[0].Photo}`)} alt={category[0].Name} className={classes.category_container}/>;
  }
  else{
    categoryElement = <div className={classes.category_container}>{props.category}</div>
  }

  return (
    <div className={classes.CardElement} onClick={openPage}>
      {categoryElement}
      <div className={classes.card}>
        <img src={require(`../../images/${props.photoName}`)} alt={props.photoName} />
        <label>{props.children}</label>
      </div>
    </div>
  );
}