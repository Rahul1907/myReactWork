import React, { Component } from 'react'

class BoxComp extends Component {
  
  render() {
    return (
      <div>
          <h2 align="center">Select A Box</h2>
          <p align="center"><small>Choose a Packaging that Speaks to your Loved one's style</small></p>
          <div style={{display:'flex',justifyContent:'center'}}>
              <div>
                <input type="image" src={this.props.Blackpack} alt="Black Packing" name="Pack" id="Blackpack" className="packing" onClick={this.props.handleNext}/>
                <p align="center">White</p>
              </div>
              <div>
                <input type="image" src={this.props.WhitePack} alt="White Packing" name="Pack"  id="Whitepack" className="packing" onClick={this.props.handleNext}/>
                <p align="center">Black</p>
              </div>
            
          </div>
      </div>
    )
  }
}

export default BoxComp
