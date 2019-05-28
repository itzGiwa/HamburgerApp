import React from 'react';
import classes from './BuilControl.css';

const buildControl = (props) => {
 return (
     <div className={classes.BuildControl}>{props.label}
     <button className={classes.Less} onClick={props.less}>Less</button>
     <button className={classes.More} onClick={props.more}>More</button>
     </div>
 )
}

export default buildControl