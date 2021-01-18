import * as actionTypes from './actions';

const initialState={
    ingredients:{
        bacon:0,
        cheese:0,
        meat:0,
        salad:0

    },
    totalPrice:10,
}
const INGREDIENTS_PRICES={
    salad:10,
    bacon:15,
    cheese:20,
    meat: 30
    
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            console.log("states manupulating 01")
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] + 1
                },
                totalPrice:state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
                

            };
            
        case actionTypes.DELETE_INGREDIENT:
            console.log("states manupulating 02")    
        
        return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1
                },
                totalPrice:state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]

            };
        default:
            return state;
    }

}

export default reducer;