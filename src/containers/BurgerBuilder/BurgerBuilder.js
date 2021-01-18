import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';



class BurgerBuilder extends Component{

    state={
        // ingredients:null,
        // totalPrice:10,
        // purchaseable: false,
        purchasing:false,
        spinner:false
    };
    componentDidMount(){
        axios.get('https://burger-khabo-default-rtdb.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data});
        })
    }

    updatePurchaseState(ingredients){
        const sum=Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey]
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        return sum>0;
    }

    // addIngredientHandler=(type)=>{                                                    //state manupulating
    //     const oldCount=this.state.ingredients[type];
    //     const updatedCount=oldCount + 1;
    //     const updatedIngredients={
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     const updatedPrice=this.state.totalPrice+INGREDIENTS_PRICES[type];
    //     this.setState({
    //         totalPrice:updatedPrice,
    //         ingredients:updatedIngredients

    //     });
    //     this.updatePurchaseState(updatedIngredients);


    // }

    // removeIngredientHandler=(type)=>{
    //     const oldCount=this.state.ingredients[type];
    //     if(oldCount<=0){
    //         window.alert('No pressed ingredients left.')
    //         return;
    //     }
    //     const updatedCount=oldCount - 1;
    //     const updatedIngredients={
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type]=updatedCount;
    //     // const updatedPrice=this.state.totalPrice-INGREDIENTS_PRICES[type];
    //     this.setState({
    //         totalPrice:updatedPrice,
    //         ingredients:updatedIngredients

    //     });
    //     this.updatePurchaseState(updatedIngredients);


    // }
    purchaseHandler=()=>{
        this.setState(
            {purchasing:true}
        );
    }

    disableBackdropHandler=() =>{
        this.setState({
            purchasing:false
        });
    }
    orderContinueHandler=() =>{
        
        
        this.props.history.push('/checkout');
    }
    render(){
        let orderSummary=null;
        let burger=<Spinner/>
        if(this.props.ings){
            burger=(
                <Auxiliary>
                <Burger ingredients={this.props.ings}/>
                <BuildControls 
                addedIngredients={this.props.onIngredientAdded}
                removedIngredients={this.props.onIngredientDeleted}
                price={this.props.price}
                purchaseable={this.updatePurchaseState(this.props.ings)}
                ordered={this.purchaseHandler}
                />
                </Auxiliary>
            );
            orderSummary=<OrderSummary
            price={this.props.price} 
            orderCancel={this.disableBackdropHandler} 
            orderContinue={this.orderContinueHandler} 
            ingredients={this.props.ings}/>

        }
        if(this.state.loading){
            orderSummary=<Spinner/>

        }


       
        
        return(
            <Auxiliary>
            <Modal show={this.state.purchasing} disableBackdrop={this.disableBackdropHandler}>
            {orderSummary}
            </Modal>
            {burger}
            


            </Auxiliary>
        );
    }

}


const mapStateToProps=state=>{
    return{
        ings: state.ingredients,
        price:state.totalPrice
    }

}

const mapDispatchToProps=dispatch=>{
    console.log('dispatched')
    return{
    
        
        onIngredientAdded:(ingName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
        onIngredientDeleted:(ingName)=>dispatch({type:actionTypes.DELETE_INGREDIENT,ingredientName:ingName})

    }
}
    
    

export default connect(mapStateToProps,mapDispatchToProps) (BurgerBuilder);