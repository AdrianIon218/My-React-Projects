import classes from './Projects.module.css'
import categoryPhotos from './CategoryPhotos'

export default function Card(props){

  function openPage(){
    window.open(props.link, '_blank');
  } 

  const categories = Object.keys(props.categories)
            .map((key,index)  => {
              const categoryName = props.categories[key];
              const category = categoryPhotos.filter(category=>category.Name === categoryName);
              return category.length > 0 ?
                (<img key={index} alt={category[0].Name} className={classes.category_container}
                      src={require(`../../images/${category[0].Photo}`)}  />) :
                (<div key={index} className={classes.category_container}>{categoryName}</div>);
              });

  const tooltiptext = props.description;

  return (
    <div className={classes.CardElement} onClick={openPage}>
      <div className={classes.column_container}>
      {categories}
      </div>
      <div className={classes.card}>
        <img src={require(`../../images/${props.photoName}`)} alt={props.photoName} />
        <label>{props.children}</label>
      </div>
      <span className={classes.tooltiptext} onClick={(event)=>{event.stopPropagation();}}>{tooltiptext}</span>
    </div>
  );
}