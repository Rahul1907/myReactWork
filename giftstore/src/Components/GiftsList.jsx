import React, { Component } from 'react'
import Gift from './Gift'
import giftOptions from '../data'



class GiftsList extends Component {
  constructor(){
    super()
    this.state={
      sortOrder:''
    }

  }


  render() {
    var gifts=Object.values(giftOptions).map(x=>{
      return <Gift key={x.id} id={x.id} name={x.name} price={x.price} image={x.image} />
    })
    return (
      <div>
        <h2 align="center">Choose your Gifts</h2>
        <p align="center">Choose a Packaging that Speaks to your Loved one's style</p>
        <div>
          <select>
            <option selected >Select filter</option>
            <option value="A-Z" >A-Z </option>
            <option value="Z-A" >Z-A </option>
            <option value="H-L" >High to Low </option>
            <option value="L-H" >Low to High </option>
          </select>
        </div>
        <div className="giftDisplay">
          {gifts}
        </div>      
      </div>
    )
  }
}

export default GiftsList
