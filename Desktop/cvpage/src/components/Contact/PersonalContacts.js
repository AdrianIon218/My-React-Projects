import classes from "./Contact.module.css";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import LinkContact from "./LinkContact";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function PersonalContacts() {
  const userCtx = useContext(UserContext);
  const contacts = userCtx.contactArr ? [...userCtx.contactArr] : [];

  const contactsElements = contacts.map((contact, index) => {
    switch (contact.type) {
      case "email":
        return <Email key={contact.address}>{contact.address}</Email>;
      case "phone":
        return (
          <PhoneNumber
            key={contact.number}
            photoName={contact.photoName}
            alt={` ${contact.country} `}
          >
            {contact.number}
          </PhoneNumber>
        );
      case "link":
        return (
          <LinkContact key={index} href={contact.href} name={contact.name} />
        );
      default:
        return null;
    }
  });

  return (
    <React.Fragment>
      <h2>Contacts</h2>
      <div className={classes.personalContact}>{contactsElements}</div>
    </React.Fragment>
  );
}
