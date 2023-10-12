import classes from "./Contact.module.css";
import { useRef } from "react";

export default function MessageForm(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredMessage = messageRef.current.value;
    const date = new Date();

    const messageData = {
      name: enteredName,
      emial: enteredEmail,
      message: enteredMessage,
      date: date.toLocaleDateString(),
    };

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    props.addMessage(messageData);
  }

  return (
    <section>
      <h2>Write a message ?</h2>
      <form onSubmit={submitHandler}>
        <ul className={classes.noBulletList}>
          <li>
            <label htmlFor="name">
              Name <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="ex: Andrew"
              ref={nameRef}
              required
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
              ref={emailRef}
              required
            />
          </li>
          <li>
            <textarea
              rows="10"
              placeholder="Message ..."
              ref={messageRef}
            ></textarea>
          </li>
          <li>
            <button>Send</button>
          </li>
        </ul>
      </form>
    </section>
  );
}
