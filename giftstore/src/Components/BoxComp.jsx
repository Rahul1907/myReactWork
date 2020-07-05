import React, { Component } from 'react'

class BoxComp extends Component {
  
  render() {
    return (
      <div>
          <h2 align="center">Select A Box</h2>
          <p align="center">Choose a Packaging that Speaks to your Loved one's style</p>
          <div style={{display:'flex',justifyContent:'center'}}>
              <div>
                <input type="image" src={this.props.Blackpack} alt="Black Packing" name="BlackPack" id="blackPack" className="packing" onClick={this.props.handleNext}/>
                <p align="center">White</p>
              </div>
              <div>
                <input type="image" src={this.props.WhitePack} alt="White Packing" name="WhitePack"  id="whitePack" className="packing" onClick={this.props.handleNext}/>
                <p align="center">Black</p>
              </div>
            
          </div>
      </div>
    )
  }
}

export default BoxComp
