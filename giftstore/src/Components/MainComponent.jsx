import React, { Component } from 'react'
import Boxcompo from './BoxComp'
import Stepper from 'react-js-stepper'
import Blackpack from '../images/BlackPack.jpg'
import WhitePack from '../images/WhitePack.jpg'
import GiftList from './GiftsList'
import {connect} from 'react-redux'
import {addPacking} from './Actions/index'

const steps = [{title: 'Step-1'}, {title: 'Step-2'}, {title: 'Step-3'}, {title: 'Step-4'}]


class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
      giftProps:{}
    }
  }

  handleOnClickStepper = (step) => {
    if(step<this.state.activeStep)
      this.setState({activeStep: step});
  }

  handleOnClickNext = (e) => {
    this.props.addPacking(e.target.name)
    
    let nextStep = this.state.activeStep + 1;
    this.setState({activeStep: nextStep})
  }


handleOnClickBack = () => {
    let prevStep = this.state.activeStep - 1;
    this.setState({activeStep:prevStep})
}



render(){
    return(
      <div className="container"> 
        <React.Fragment>
            <Stepper 
              className="stepperStyle"
              steps={steps} 
              activeStep={this.state.activeStep}
              onSelect={this.handleOnClickStepper}
              // showNumber={true} 
            />
            <div style={{marginTop: '40px'}}>
              {this.state.activeStep===1 && <Boxcompo Blackpack={Blackpack} WhitePack={WhitePack} handleNext={this.handleOnClickNext}/>}    
              {this.state.activeStep===2 && <GiftList />}
              {this.state.activeStep===2 && this.props.gifts.items && <div> <h1>{this.props.gifts.id}</h1></div>}
              {this.state.activeStep===3 }
              {this.state.activeStep===4}
            </div>

            <div style={{marginTop: '40px'}}>
              <input type="button" value={this.state.activeStep === steps.length ? 'Finish' : 'Next'} 
                onClick={this.state.activeStep === steps.length ? null : this.handleOnClickNext}/>
                
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
