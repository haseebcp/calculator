import React,{Component} from "react"
import Numbers from "./number";
import "./comp1.css";
class CompOne extends React.Component {
  constructor() {
    super();
    this.state={
      value:"green"
    }
    this.handleClick=this.handleClick.bind(this);
  };
  handleClick() {
    this.setState({
      value: 'blue'
    })
  };
  render(){

    return(
      <div className="container">
      <Numbers/>
      </div>
    );
  }
}
export default CompOne;
