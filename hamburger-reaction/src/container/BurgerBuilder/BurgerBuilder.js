import React, {Component} from 'react';
import Auxi from '../../hoc/auxi';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{

    render(){
        return (
        <Auxi>
            <Burger />
            <div>Burger Controls</div>
        </Auxi>
        )
    }
}

export default BurgerBuilder;