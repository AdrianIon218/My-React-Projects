import MessageForm from './MessageForm'
import PersonalContacts from './PersonalContacts';
import TemporalNotification from '../Notification/TemporalNotification'
import {useState} from 'react';

export default function Contact(){
  const [isSendMessageShown, setSendMessageShown] = useState(false); 

  function addNewMessage(MessageData){
    setSendMessageShown(true);
    // https://console.firebase.google.com/u/0/project/cv-app-801f5/database/cv-app-801f5-default-rtdb/data/~2F
    fetch(
      'https://cv-app-801f5-default-rtdb.firebaseio.com/message.json',
      {
        method: 'POST',
        body:JSON.stringify(MessageData),
        headers: {
          'Content-Type':'application/json'
        }
      }
    )
  }

  function hideSendMessage(){
    setSendMessageShown(false);
  }

  return (<>
    {isSendMessageShown && (<TemporalNotification hideMessage={hideSendMessage}>Message sent</TemporalNotification>)}
    <PersonalContacts />
    <MessageForm addMessage={addNewMessage} />
  </>);
}