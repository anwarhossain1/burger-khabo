import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls=[
    {label:"Salad" ,type:"salad"},
    {label:"Bacon" ,type:"bacon"},
    {label:"Cheese" ,type:"cheese"},
    {label:"Meat" ,type:"meat"}
];
const Buildcontrols=(props)=>{
    
    return(
        <div className={classes.BuildControls}>
             <p>Total Price:<strong>{props.price.toFixed(2)}</strong> BDT</p>
            {controls.map(ctrl=>(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={()=>props.addedIngredients(ctrl.type)}
                removed={()=>props.removedIngredients(ctrl.type)}
                />
                
            ))}
            <button className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}
            >Order now
            </button>

        </div>
    );

}
export default Buildcontrols;