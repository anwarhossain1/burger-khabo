import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
class ContactData extends Component{
    state={
        name:"",
        email:"",
        address:{
            street:"",
            postalcode:""
        }
    }
    orderHandler=(e)=>{
        e.preventDefault;
        this.setState({loading:true})
        const orders={
            ingredients:this.props.ings,
            totalPrice:this.props.price,
            details:{
                name:'anwar',
                email:'test@test.com'

            }
        }

        //alert("Continued!")

        axios.post('/orders.json',orders)
        .then(response=>{
            this.setState({
                loading:false
            })
            this.props.history.push('/');
        })
        .catch(error=>{this.setState({
            loading:false,
            
        })});
        //console.log(this.props.ingredients);

    }
    render(){
        let form=(
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
                <input className={classes.Input} type="text" name="street" placeholder="Your Name"/>
                <input className={classes.Input} type="text" name="postalcode" placeholder="Your Name"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form=<Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
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
export default connect(mapStateToProps)(ContactData);