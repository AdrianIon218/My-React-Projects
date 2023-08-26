import classes from './Contact.module.css'

export default function Email(props){
  return (
    <div className={classes.divRowCentered}>
      <i className={`fa fa-envelope ${classes.icon}`} aria-hidden="true" />
      <span className={classes.mailMargin}>{props.children}</span>
    </div>
  );
}