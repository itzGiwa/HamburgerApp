import React, { Component } from 'react';
import Auxi from '../../hoc/auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls'


const INGREDIENT_PRICES ={
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const addedPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newTotalPrice = oldPrice + addedPrice;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        });
    }

    removeIngredientHandler = (type) => {
        const oldCOunt = this.state.ingredients[type];
        if(oldCOunt < 1){
            return
        }
        const newCount = oldCOunt - 1;
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = newCount;

        const oldPrice = this.state.totalPrice;
        const ingredientPrice = INGREDIENT_PRICES[type];

        const newTotalPrice = oldPrice - ingredientPrice;

        this.setState({
            ingredients: updatedIngredient,
            totalPrice: newTotalPrice
        })
    }

    render(){
        return (
        <Auxi>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}/>
        </Auxi>
        )
    }
}

export default BurgerBuilder;