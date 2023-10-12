import MessageForm from "./MessageForm";
import PersonalContacts from "./PersonalContacts";
import TemporalNotification from "../Notification/TemporalNotification";
import { useState } from "react";
import { FIREBASE_MESSAGE } from "../../PrivateData";

export default function Contact() {
  const [isSendMessageShown, setSendMessageShown] = useState(false);

  function addNewMessage(MessageData) {
    setSendMessageShown(true);
    fetch(FIREBASE_MESSAGE, {
      method: "POST",
      body: JSON.stringify(MessageData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function hideSendMessage() {
    setSendMessageShown(false);
  }

  return (
    <>
      {isSendMessageShown && (
        <TemporalNotification hideMessage={hideSendMessage}>
          Message sent
        </TemporalNotification>
      )}
      <PersonalContacts />
      <MessageForm addMessage={addNewMessage} />
    </>
  );
}
