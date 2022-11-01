import classes from './CV.module.css'

export default function Profile(props){
  const {birthdate} = props;
  
  function calculateAge() { 
    var diff_ms = Date.now() - new Date(birthdate).getTime();
    var age_dt = new Date(diff_ms);   
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  
  const age = calculateAge();

  return (
    <>
    <h2 className={classes.title}>{props.name}</h2>
    <p className={classes.center}>
      <img className={classes.myPhoto} alt=""
        src={require(`../../images/${props.photoProfile}`)} />
    </p>
    <div className={`${classes.center} ${classes.divColumn}`}> 
      <i className='fas fa-map-marker-alt'>&nbsp;{props.address}</i> 
      <i className='fas fa-male'>&nbsp;{`${age} years old`}</i> 
      <i className='fas fa-suitcase'>&nbsp;{props.jobTitle}</i>
    </div>
    </>
  );
}