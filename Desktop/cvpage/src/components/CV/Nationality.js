import classes from './CV.module.css'
import NationalFlags from './nationalityFlags';

export default function Nationality(props){
  const europeanFlag = props.isEuropean ? 
        <img title="EU citizen" src={require('../../images/europeanFlag.png')} className={classes.flag} alt="European" /> : null;

  const nationality = !props.nationality ? null : 
                              NationalFlags.filter((item)=> item.Nationality === props.nationality);
  
  const nationalityFlag = nationality.length === 0 ? null :
    <img title={props.nationality} src={require(`../../images/${nationality[0].FlagName}`)} className={classes.flag} alt={props.nationality} />;
  
  return (!europeanFlag) && (!nationalityFlag) ? null : (<p> {nationalityFlag} {europeanFlag} </p>);
}