import React,{Component} from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './Checkoutsummary.css';



const Checkoutsummary=(props)=>{
    
        return(
            <div className={classes.Checkout}>
                <h1>Things</h1>
                <Burger ingredients={props.ingredients}/>
                <div>
                    <Button btnType="Danger" clicked={props.checkoutSubmitCanceller}>CANCEL</Button>
                    <Button btnType="Success" clicked={props.checkoutSubmitContinued}>CONTINUE</Button>
                    
                </div>

            </div>
        );
    
}

export default Checkoutsummary;