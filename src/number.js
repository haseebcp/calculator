import React,{Component} from "react"

class Numbers extends Component {
get initialstate(){
  return {
    num1:"",
    num2:"",
    op:"",
  }
};
  constructor() {
    super();
    this.state=this.initialstate;
    this.state.result=0;
    this.symbolClick=this.symbolClick.bind(this);
    this.numClick=this.numClick.bind(this);
    this.getResult=this.getResult.bind(this);
    this.clear=this.clear.bind(this);
  }
  clear(c){
    if(c){
      this.setState({result:0});
    }
     this.setState(()=>this.initialstate);
  }
  getResult(){

    switch (this.state.op) {

      case'+':

        this.setState({result:parseInt(this.state.num1)+parseInt(this.state.num2)})
        break;
      case '-':
        this.setState({result:parseInt(this.state.num1)-parseInt(this.state.num2)})
        break;
      case document.getElementById('mul').textContent:
         this.setState({result:parseInt(this.state.num1)*parseInt(this.state.num2)})
        break;
      case document.getElementById('divs').textContent:
        this.setState({result:isNaN(parseInt(this.state.num1)/parseInt(this.state.num2))?"E":parseInt(this.state.num1)/parseInt(this.state.num2)})
        break;
      default:

    }
   this.clear();

  }
  numClick(n){
      if(this.state.op==""){
        this.setState({num1:this.state.num1+""+""+n,result:this.state.num1+""+""+n})
      }else{
        this.setState({num2:this.state.num2+""+""+n,result:this.state.num1+this.state.op+this.state.num2+""+""+n})
      }

  }
  symbolClick(op){
   if(!this.state.num1||(this.state.num1&&this.state.num2)){
      return;
    }
    switch (op) {
      case'+':
       this.setState(()=>{this.state.op='+'})
        break;
      case '-':
        this.setState(()=>{this.state.op='-'})
        break;
      case '*':
          this.setState(()=>{this.state.op= document.getElementById('mul').textContent})
        break;
      case '/':
        this.setState(()=>{this.state.op=document.getElementById('divs').textContent})
      break;
      default:
    }

  }
  render(){
    var numbers=[];
    for(var i=0;i<10;i++){
     numbers.push(<button className="btn number-btn number-btn" key={i} value={i} onClick={this.numClick.bind(null,i)}>{i}</button>);
     }
    return(

    <div className="num-wrap">
      <div  className="textfield" >{this.state.result}</div>

      <button className="btn btn-primary"  onClick={(e)=>this.symbolClick('+')}>+</button>
      <button className="btn btn-primary"  onClick={(e)=>this.symbolClick('-')}>-</button>
      <button id="mul" className="btn btn-primary"  onClick={(e)=>this.symbolClick('*')}>&#215;</button>
      <button id="divs" className="btn btn-primary"  onClick={(e)=>this.symbolClick('/')}>&#247;</button>
      {numbers}
      <button className="btn btn-success" onClick={this.getResult}>=</button>
      <button className="btn btn-danger" onClick={this.clear}>C</button>
    </div>
  )
  }
}
export default Numbers
