import MessageForm from "./MessageForm";
import PersonalContacts from "./PersonalContacts";
import TemporalNotification from "../Notification/TemporalNotification";
import { useState } from "react";

export default function Contact() {
  const [isMessageShown, setMessageShown] = useState(false);

  function showNotification(){
    setMessageShown(true);
  }

  function hideNotification() {
    setMessageShown(false);
  }

  return (
    <>
      {isMessageShown && (
        <TemporalNotification hideNotification={hideNotification}>
          Message sent
        </TemporalNotification>
      )}
      <PersonalContacts />
      <MessageForm showNotification={showNotification} isNotificationShown={isMessageShown} />
    </>
  );
}
