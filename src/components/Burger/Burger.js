import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
const Burger=(props)=>{                                                         //state er object ta, array te covert and then manupulating
    let transformedIngredients=Object.keys(props.ingredients)
    .map(igKey=>{
        console.log(igKey)
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please Add some ingredients</p>
    }

    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            {/* <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/> */}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default Burger;

