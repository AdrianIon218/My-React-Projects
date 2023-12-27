import classes from "./TemporalNotification.module.css";

export default function TemporalNotification(props) {
  function hideNotification() {
    props.hideNotification();
  }

  return (
    <div className={classes.notification} onAnimationEnd={hideNotification}>
      {props.children}
    </div>
  );
}
