import React, { Component } from 'react'
import Gift from './Gift'
import giftOptions from '../data'



class GiftsList extends Component {
  constructor(){
    super()
    this.state={
      records:Object.values(giftOptions),
      sortOrder:''
    }

  }

  sortMethod=(e)=>{
    var sortRecords=[...this.state.records]
    switch(e.target.value){
      case 'A-Z':
        sortRecords.sort(function(a,b){
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
          else if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
          return 0
        })
        break;
      case 'Z-A':
        sortRecords.sort(function(a,b){
          if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
          else if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
          return 0
        })
        break;
      case 'H-L':
        sortRecords.sort(function(a,b){
          return b.price - a.price;
        })
        break;
      case 'L-H':
        sortRecords.sort(function(a,b){
          return a.price - b.price;
        })
        break;
      default :
      sortRecords.sort(function(a,b){
        return a.id - b.id;
      })
      break;
    }
    this.setState({
      sortOrder:e.target.value,
      records:sortRecords
    })  
  }

  render() {
    var gifts=this.state.records.map(x=>{
      return <Gift key={x.id} id={x.id} name={x.name} price={x.price} image={x.image} />
    })
    return (
      <div>
        <h2 align="center">Choose your Gifts</h2>
        <p align="center">Choose a Packaging that Speaks to your Loved one's style</p>
        <div>
          <b>Filter </b>
          <select onChange={this.sortMethod} placeholder="Select Filter">
            <option value="default">Default</option>
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
