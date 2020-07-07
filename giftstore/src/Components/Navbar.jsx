import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{marginBottom:'60px'}}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >Gift Shop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
