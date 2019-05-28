import React from 'react';
import Auxi from '../../hoc/auxi';
import classes from './layout.css'

const layout = (props) => {
    return (
        <Auxi>
            <div>Toolbar , Sidebar and BackDrop</div>
            <main className={classes.Content}>
            {props.children}
            </main>
        </Auxi>
    )
}

export default layout