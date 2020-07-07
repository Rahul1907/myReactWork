import React, { Component } from 'react'
import {connect} from 'react-redux'
import Sticker1 from '../images/sticker1.jpg'
import Sticker2 from '../images/sticker2.jpeg'
import Sticker3 from '../images/sticker3.png'
import {addSticker} from './Actions/index'
class Sticker extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      msgBox:false,
      selectedImage:null,
      memovalue:'',
      memoDiable:false,
      stickerName:''
    }
  }
  
  selectSticker=(e)=>{
    var selectimg;
    var stickername='';
    switch(e.target.name){
      case 'Sticker1':
        selectimg=Sticker1;
        stickername="Green Sticker";
        break;
      case 'Sticker2':
        selectimg=Sticker2;
        stickername="Blue Sticker";
        break;
      case 'Sticker3':
        selectimg=Sticker3;
        stickername="Pink Sticker";
        break;
      default :
        break;
    }
    this.setState({
      msgBox:true,
      selectedImage:selectimg,
      stickerName:stickername

    })
  }

  memoUpdate=(e)=>{
    if(e.target.value.length<=350){
      this.setState({
        memovalue:e.target.value
      })
    }
  }

  SubmitClick=(e)=>{
    var objPass={
      name:this.state.stickerName,
      image:this.state.selectedImage,
      msg:this.state.memovalue==='' || this.state.memoDiable===true ?null:this.state.memovalue
    }
    this.props.addSticker(objPass);
    this.props.handleNext(e);
  }

  render() {
    
    return (
      <div>
        <h2 align="center">Create Your Peace oh Heaven</h2>
        <p align="center"><small> Choose the perfect card for the occasion from our selection of exlusive designs </small></p>
        {
          !this.state.msgBox &&
          <div className="sticker-options">
            <div>
              <input type="image" src={Sticker1} alt="sticker" name="Sticker1" onClick={this.selectSticker}></input><p>Green Sticker</p>
            </div>
            <div>
              <input type="image" src={Sticker2} alt="sticker" name="Sticker2" onClick={this.selectSticker}></input><p>Blue Sticker</p>
            </div>
            <div>
              <input type="image" src={Sticker3} alt="sticker" name="Sticker3" onClick={this.selectSticker}></input><p>Pink Sticker</p>
            </div>

          </div>
        }
        {
          this.state.msgBox && 
          <div>
            <div className="row">
              <div className="col-lg-4">
                <img src={this.state.selectedImage} style={{height:'300px',width:'100%'}} alt="giftCard"/>
                <div style={{textAlign:'center'}}><button className="change-btn" onClick={(e)=>{this.setState({selectedImage:null,msgBox:false})}}>(Change)</button> </div> 
              </div>
              <div className="col-lg-8">
                <p>Message on Card</p>
                {350-this.state.memovalue.length} Character(s) remaining
                <textarea cols="70" rows="9" value={this.state.memovalue} placeholder="Max Length 350" onChange={this.memoUpdate} disabled={this.state.memoDiable} />
                <input type="checkbox" name="OwnMsg" onClick={(e)=>{this.setState({memoDiable:e.target.checked})}}/> Want it Hand written
              </div>
            </div>
            <div style={{textAlign:'center',marginTop:'10px'}}>
              <button className="btn btn-success" onClick={this.SubmitClick}> Save Message and Card </button>
            </div>  
          </div>


        }
        
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {gifts:state.gifts}
}

export default connect(
  mapStateToProps,
  {addSticker}
)(Sticker)