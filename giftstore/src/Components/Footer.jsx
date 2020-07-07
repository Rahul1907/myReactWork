import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container footer-data" >
          <div>
            <b>Say in the loops of what's New</b>
            <p>abcd</p>
          </div>
          <div style={{textAlign:'center'}}>
            <b>Customer care</b>
            <p><small>get answers to your Quetions</small></p>
            <div className="footer-inside">
              <p>Our Story</p>
              <p>FAQs</p>
              <p>Terms and Privacy</p>
              <p>Shipping</p>

            </div>
          </div>

          <div>
            <b>Featured Collections</b>
            <p><small>Browse Our Product</small></p>
            <div className="footer-inside">
              <p>Top 50 best Seller</p>
              <p>Unisex Gifts</p>
              <p>Timeless Rosses</p>
            </div>
          </div> 
          <div>
            <b>Keep In Touch</b>
            <p><small>Contact us</small></p>
            <div className="footer-inside">
              <span style={{padding:'5px'}}>
                <i class="fa fa-facebook-square" aria-hidden="true"></i> 
              </span>
              <span style={{padding:'5px'}}>
                <i class="fa fa-instagram" aria-hidden="true"></i> 
              </span>
              <span style={{padding:'5px'}}>
                <i class="fa fa-twitter" aria-hidden="true"></i> 
              </span>
            </div>
          </div>
          </div>
        </div>
      // </div>
    )
  }
}

export default Footer
