import React from 'react';
import logo from './logo.svg';
import './App.css';

// function HelloW(props){
//   console.log(props);
//   return( 
//   <div id="helloW">
//     <h5>{props.subtitle}</h5>
//     Hello {props.mytest} 💀
//   </div>);
// }

function App() {
  return (
    <div>
       this si my component :  <HelloW mytest="hello etho" subtitle="title 1"/>
       <HelloW mytest="hello soni" subtitle="n2 "/>
       <HelloW mytest="hello fitch" subtitle="call em killers"/>
    </div>
  );
}

class HelloW extends React.Component
{
  state = {
    show : true
  }
  toggleShow = () => {
    this.setState({show : !this.state.show})
  }
  render(){
    if(this.state.show){
      return (
        <div id="helloW">
        <h5>{this.props.subtitle}</h5>
        Hello {this.props.mytest} 💀
       <br/><br/>
        <button onClick={this.toggleShow}>toogle button</button>
        </div>
      )  
    }else {
      return <div id="helloW" >no hay elemento
        <br/><br/>
        <button onClick={this.toggleShow}>toogle button</button>
      </div> 
    }
      
  }
}

export default App;
