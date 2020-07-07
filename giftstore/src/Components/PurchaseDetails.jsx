import React, { Component } from 'react'
import Blackpack from '../images/BlackPack.jpg'
import WhitePack from '../images/WhitePack.jpg'

class PurchaseDetails extends Component {
  render() {
    console.log(this.props);
    var value=100;
    var Items=Object.values(this.props.data.items).map(x=>{
      value+=(x.price*x.qty);
      return <li key={x.id}>{x.qty} - {x.name} <i className="fa fa-inr" aria-hidden="true"></i> {x.price}.00</li>
    })

    return (
      <div>
        <h2 align="center">Your Gift Box</h2>
        <div className="row" style={{height:'600px'}}>
          <div className="col-lg-6">
            {this.props.data.packing === 'Blackpack' && <img src={Blackpack} alt="Black Packing" style={{width:'100%',height:'500px'}}/>}
            {this.props.data.packing === 'Whitepack' && <img src={WhitePack} alt="White Packing" style={{width:'100%',height:'500px'}}/>}
          </div>
          <div className="col-lg-6" style={{paddingLeft:'50px'}}>
            <div>
              <b>Your gift-box</b>
              <p>Box Color : {this.props.data.packing === 'Blackpack'?'Black':'White'}</p>
              <p>Box Price : <i className="fa fa-inr" aria-hidden="true"></i> 100.00</p>
            </div>
            <div>
              <b>Your Items :</b>
              <ul style={{listStyleType:'none',marginLeft:'-40px'}}>{Items}</ul>
            </div>
            <div>
              <b>Your Message:</b>
              <p>{this.props.data.stickerInfo.msg===null?'Not have any Message':this.props.data.stickerInfo.msg}</p>
            </div>
            <div>
              <b>Your Card :</b><br/>
              <img src={this.props.data.stickerInfo.image} alt="Choosed Sticker" style={{height:'50px',width:'50px'}}/><br/>
            </div>
            <div>
              <b>TOTAL PRICE : <i className="fa fa-inr" aria-hidden="true"></i> {value}.00 </b><br/>
              <button className="btn btn-primary" style={{marginLeft:'80px'}}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PurchaseDetails
