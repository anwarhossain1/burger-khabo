import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary.js';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer: !true
    };

    sideDrawerCloserHandler=()=>{
        this.setState({showSideDrawer:false})
        console.log("clicked")

    };

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {
                showSideDrawer:!prevState.showSideDrawer

            }
          
        })
    };
    render(){
        return(
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerCloserHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                    </main>
            </Auxiliary>  
        )
        
    }

}
    

export default Layout;