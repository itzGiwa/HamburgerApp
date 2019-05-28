import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
]

const buildControls = (props) => {
 return ( <div className={classes.BuildControls}>
     {controls.map(cntrl => <BuildControl 
     key={cntrl.label} 
     label={cntrl.label} 
     more={() => props.addIngredient(cntrl.type)}
     less={() => props.removeIngredient(cntrl.type)}
     />)}
 </div> )
}

export default buildControls