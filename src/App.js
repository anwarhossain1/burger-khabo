
import './App.css';
import React,{Component} from 'react';
class App extends Component {
  change=(e)=>{
    console.log("clicked");
}
  render(){
  
    return (
      <div>
        <h1 className="setcomp">My App</h1>
        <span>
          <button onClick={this.change}>Press</button>
        </span>
      </div>
      
    );

  }
 
}

export default App;
