import classes from './Contact.module.css'

export default function PhoneNumber(props){
  return(
    <div className={classes.divRowCentered}>
      <i className="fa fa-phone" aria-hidden="true" />
      <img className={classes.phoneNationality} src={require(`../../images/${props.photoName}`)} alt={props.alt} />
      <div>{props.children}</div>
    </div>
  );
}