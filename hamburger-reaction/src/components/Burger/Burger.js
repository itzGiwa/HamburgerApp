import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {

    let transformedIngredient = Object.keys(props.ingredients).map(
        igkey => {
            return [...Array(props.ingredients[igkey])].map(
                (_, i) => {
                    return <BurgerIngredient key={igkey + i} type={igkey} />
                }
            )
        }
    ).reduce((prev, curr) => {
        return prev.concat(curr)
    }, []);

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please Start Adding Ingredient</p>
    }

 return ( <div className={classes.Burger}>
     <BurgerIngredient type="bread-top" />
     {transformedIngredient}
     <BurgerIngredient type="bread-bottom" />
 </div> )
}

export default burger