import classes from './Footer.module.css'
import linkedinFoto from '../../images/linkedin.png'
import contactFoto from '../../images/contact-icon.png'
import ButtonIcon from '../CustomedElements/Button'
import {useContext} from 'react'
import { UserContext } from '../Context/UserContext'

export default function Footer(props){
  const footerData = {...useContext(UserContext).footerData};

  return (
    <footer className={classes.footer}>
      <div>
        <p>{footerData.name}</p>
      </div>
      <div>
      </div>
      <div className={classes.socialMedia}>
        {footerData.linkedinLink && <ButtonIcon img={linkedinFoto} alt="linkedin" linkExternalPage={footerData.linkedinLink} />}
        <ButtonIcon img={contactFoto} alt="contact" linkInternalPage="Contact" />
      </div>
    </footer>);
}