import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addGift,addOne,removeGift} from './Actions/index'

class Gift extends Component {
  constructor(){
    super()
    this.state={
      addButton:false,
      descInc:false,
      firstadd:'block'
    }
  }

  addElemnet=()=>{

    var obj={
      id:this.props.id,
      name:this.props.name,
      price:this.props.price,
      image:this.props.image
    }
    this.props.addGift(obj)
    this.setState({addButton:false,descInc:true,firstadd:'none'})
  }
  
  addMinus=(e)=>{
    
    switch(e.target.value){
      case 'add':
        this.props.addOne(this.props.id)
        break;
      case 'minus':
        this.props.removeGift(this.props.id)
        break;
      default:
        break;
    }
  }
  
  render() {
    var items=this.props.gifts.items && this.props.gifts.items[this.props.id]? this.props.gifts.items[this.props.id]['qty']:1;
    return (
      <div className="gift-style" onMouseOver={()=>{ this.setState({addButton:true})}} onMouseLeave={()=>{this.setState({addButton:false})}} >
        {
          this.state.addButton && 
          <button value="add" className="addButton btn btn-success" style={{display:this.state.firstadd}}  onClick={this.addElemnet} >
            Add to bag
          </button>
        }        
        
        {
          this.state.descInc && 
          <div className="addButton" style={{display:'flex',zIndex:'1'}}>
            
            <button value="add" className="btn btn-primary" onClick={this.addMinus} >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
            <p className="bg-primary">
              In Bag {items}
            </p>
            <button value="minus" className="btn btn-primary"onClick={this.addMinus} >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button> 
          </div>
        }
        <img src={this.props.image} alt={this.props.name} style={{width:'300px',height:'300px'}}/>
        <p>{this.props.name}</p>
        <p><i className="fa fa-inr" aria-hidden="true"></i> {this.props.price}</p>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {gifts:state.gifts}
}
export default connect(
  mapStateToProps,
  {addGift,addOne,removeGift}
)(Gift)
