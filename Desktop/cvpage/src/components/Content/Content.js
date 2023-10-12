import classes from "./Content.module.css";

export default function Content(props) {
  return (
    <main className={classes.main}>
      <div></div>
      <div className={classes.content}>{props.children}</div>
      <div></div>
    </main>
  );
}
