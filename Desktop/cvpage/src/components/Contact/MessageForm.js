import { useForm } from "react-hook-form";
import classes from "./Contact.module.css";
import { FIREBASE_MESSAGE } from "../../PrivateData";

export default function MessageForm(props) {
  const {register, handleSubmit, reset} = useForm();
  
  function onSubmit(formData){
    try{
      const {name, email, message} = formData;
      const currentDate = (new Date()).toLocaleDateString();

      fetch(FIREBASE_MESSAGE, {
        method: "POST",
        body: JSON.stringify({name, email, message, date:currentDate}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.showNotification();
      reset();
    }catch(err){
      console.error(err);
    }
  }

  return (
    <section>
      <h2>Write a message ?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={classes.noBulletList}>
          <li>
            <label htmlFor="name">
              Name <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="ex: Andrew"
              required
              disabled={props.isNotificationShown}
              {...register("name")}
            />
          </li>
          <li>
            <label htmlFor="email">
              Email <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="email"
              type="email"
              placeholder="ex: name@yahoo.com"
              required
              disabled={props.isNotificationShown}
              {...register("email")}
            />
          </li>
          <li>
            <textarea
              rows="10"
              placeholder="Message ..."
              required
              disabled={props.isNotificationShown}
              {...register("message")}
            ></textarea>
          </li>
          <li>
            <button className={classes["submit-btn"]} disabled={props.isNotificationShown}>Send</button>
          </li>
        </ul>
      </form>
    </section>
  );
}
