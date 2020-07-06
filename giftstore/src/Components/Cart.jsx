import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
  render() {
    var value=0;
    var imageTag = Object.values(this.props.gifts.items).map(x=>{
      value+=x.price*x.qty;
      return <img className="cart-images" src={x.image}/>
    })

    return (
      <div className="fixed-bottom" style={{position:'fixed',backgroundColor:'peachpuff'}}>
        <div className="container">
          {imageTag}
          <button className="submit-button btn" onClick={this.props.handleNext}>
            <div>Complete Box</div>
            <div><i className="fa fa-inr" aria-hidden="true"></i> {value}.00</div>
          </button>

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {gifts:state.gifts}
}

export default connect(
  mapStateToProps,
  null
)(Cart)
