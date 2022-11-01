import Profile from './Profile'
import Education from './Education'
import {useContext} from 'react'
import {UserContext} from '../Context/UserContext'

export default function CV(){
  const userCtx = useContext(UserContext);
  const {cvData, educationArr} = userCtx;

  const educationElements = !educationArr ? null : [educationArr.map((item,index)=>{
    return <Education key={index} {...item} />
  })];

  return (
    <>
    <section>
      {cvData && <Profile {...cvData} />}
    </section>
    <section>
      {educationArr && educationElements}
    </section>
    </>
  );
}