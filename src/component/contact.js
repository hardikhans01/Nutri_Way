import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
export default function contact() {
  return (
   
        <>
        <div id="content">
      {/* <!-- NavBar --> */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{backgroundColor: '#ceecf7', padding: '2rem 10% 0',fontFamily: 'Poppins, sans-serif'}}
      >
        <Link className="navbar-brand" to="/">
          {/* <img
            src="./public/4.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /> */}
          Nutri Way
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse me-1"
          id="navbarNav"
          style={{justifyContent: "end"}}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dietary_chart.html">Dietary Chart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notify.html">Notify Me</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact_us.html"
               style={{backgroundColor: 'rgb(22, 90, 216)', borderRadius: '5%' }} >Contact Us <span className="sr-only"></span></Link
              >
            </li>
          </ul>
        </div>
      </nav>

      <center>
        <div className="main" style={{margin: "3%"}}>
        <div className="contact">
        Contact Us!
        </div>
        <div className="name">
        <input className="in" type="text" placeholder="Name....."/>
        </div>
        <div className="email">
        <input className="in" type="text" placeholder="Email....."/>
        </div>
        <div className="subj">
        <input className="in" type="text" placeholder="Subject....."/>
        </div>
        <div className="mess">
        <textarea className="m" placeholder="Message....."></textarea>
        </div>
        <div className="sen">
        <a href="mailto:hardikhans01@gmail.com"><button className="btn btn-primary btn-md" style={{width: 'auto'}}>SEND MESSAGE</button></a>
        </div>
        
        </div>
        </center>

    </div>
        
        </>
  )
}
