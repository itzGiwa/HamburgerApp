import React from 'react';
import classes from './BuilControl.css';

const buildControl = (props) => {
 return ( <div>
     <div className={classes.BuildControl}>{props.label}</div>
     <button className={classes.More} onClick={props.more}>More</button>
     <button className={classes.Less} onClick={props.less}>Less</button>
 </div> )
}

export default buildControl