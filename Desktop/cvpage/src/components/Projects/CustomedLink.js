import React from 'react';
import classes from './Projects.module.css';

import GithubLogo from "../../images/icon_github.svg";
import BitbucketLogo from "../../images/icon_bitbucket.svg";

function CustomedLink({link, children, svg}) {
  const logosMap = [{name:"github", logo: GithubLogo}, {name:"bitbucket", logo: BitbucketLogo}]
  const svgIndex = !svg ? false : logosMap.map(e=>e.name).indexOf(svg);
  const isSvgAvailable = !svg ? false : svgIndex !== -1;
  const svgStyle = isSvgAvailable && {"--svg-url":`url("${logosMap[svgIndex].logo}")`};

  return (
    <a href={link} 
       className={classes.presentation_link} 
       target="_blank" 
       rel="noreferrer">
      {isSvgAvailable && <div className={classes.icon_link} style={svgStyle} />}{" "}{children}
    </a>
  );
}

export default CustomedLink;