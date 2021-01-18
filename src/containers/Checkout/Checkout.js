import React,{Component} from 'react';
import Checkoutsummary from '../../components/Checkoutsummary/Checkoutsummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';



class Checkout extends Component{
  
    checkoutSubmitCancellerHandler=()=>{
        this.props.history.goBack();

    }

    checkoutSubmitContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');

    }


    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Checkoutsummary ingredients={this.props.ings}  
                checkoutSubmitCanceller={this.checkoutSubmitCancellerHandler}
                checkoutSubmitContinued={this.checkoutSubmitContinuedHandler}
                />
                <Route path={this.props.match.path+'/contact-data'}
                component={ContactData}
                />

            </div>

        );
    }

}

const mapStateToProps=state=>{
   return{
    ings:state.ingredients,
    price:state.totalPrice
   }
}

export default connect(mapStateToProps)(Checkout);