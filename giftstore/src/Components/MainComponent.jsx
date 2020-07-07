import React, { Component } from 'react'
import {connect} from 'react-redux'
import Stepper from 'react-js-stepper'
import Boxcompo from './BoxComp'
import GiftList from './GiftsList'
import Cart from './Cart'
import Sticker from './Sticker'
import PurchaseDetails from './PurchaseDetails'
import Blackpack from '../images/BlackPack.jpg'
import WhitePack from '../images/WhitePack.jpg'
import HeadImg from '../images/title.jpg'


import {addPacking} from './Actions/index'

const steps = [{title: 'Select Packing'}, {title: 'Choose Your Gifts'}, {title: 'Personalise it'}, {title: 'Review'}]


class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
    }
  }

  handleOnClickStepper = (step) => {
    var giveStep;
    if(step<this.state.activeStep){
      this.setState({activeStep:step})
    }
    else{
      if((step===2 && this.props.gifts.packing) || (step===3 && this.props.gifts.items && Object.values(this.props.gifts.items).length>0) || (step===4 && this.props.gifts.stickerInfo) ){
        giveStep=step;
        this.setState({activeStep:giveStep})
      }
    }
  }

  handleOnClickNext = (e) => {
    if(e.target.name==='Pack')
      this.props.addPacking(e.target.id)
    let nextStep = this.state.activeStep + 1;
    this.setState({activeStep: nextStep})
  }

  render(){
      return(
        <div className="container"> 
          <React.Fragment>
              <div>
                <img src={HeadImg} alt="Heading" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'20%'}} height="200px" width="200px"/>
                <ul class="inline-header">
                  <li><b>Shop Gifts <i class="fa fa-angle-down" aria-hidden="true"></i> </b></li>
                  <li><b>Top 50 Gifts</b></li>
                  <li><b>Timeless Roses</b></li>
                  <li><b>Our Story</b></li>
                  <li><b>Inspire Bracelets</b></li>

                </ul>
              </div>
              <hr style={{height:'5px',backgroundColor:'lightgrey'}}/>
              <Stepper 
                className="stepperStyle"
                steps={steps} 
                activeStep={this.state.activeStep}
                onSelect={this.handleOnClickStepper}
                showNumber={true} 
              />
              <div style={{marginTop: '40px'}}>
                {this.state.activeStep===1 && <Boxcompo Blackpack={Blackpack} WhitePack={WhitePack} handleNext={this.handleOnClickNext}/>}    
                {this.state.activeStep===2 && <GiftList />}
                {this.state.activeStep===2 && this.props.gifts.items && Object.values(this.props.gifts.items).length>0 && <Cart handleNext={this.handleOnClickNext} />}
                {this.state.activeStep===3 && <Sticker handleNext={this.handleOnClickNext}/>}
                {this.state.activeStep===4 && <PurchaseDetails data={this.props.gifts} />}
              </div>
          </React.Fragment>

        </div>
      )
    }
  }

const mapStateToProps=(state)=>{
  return {
    gifts:state.gifts
  }
  
}

export default connect(
  mapStateToProps,
  {addPacking}
)(MainComponent)
