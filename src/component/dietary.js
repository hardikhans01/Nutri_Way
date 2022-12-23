import React from 'react'
import { Link } from 'react-router-dom'
export default function dietary() {
  return (
    <>
    <div id="content">
      {/* <!-- NavBar --> */}
      <nav
        className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ceecf7',padding: '2rem 10% 0',fontFamily: 'Poppins, sans-serif' }}>
        <Link className="navbar-brand" to="/">
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
          style={{justifyContent: 'end'}}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/dietary_chart.html"
               style={{backgroundColor: 'rgb(22, 90, 216)', borderRadius: '5%' }} >Dietary Chart</Link
              >
            </li>
            {/* <li className="nav-item">
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/notify.html">Notify Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact_us.html">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

     <div className=" row img_1" style={{background: "#ceecf7" }}>
      <div className="col-lg-6">
        <img style={{borderRadius: '5%', display:'inline', marginTop: '2rem', marginLeft: '2rem', width: '90%', height: '90%'}} src="https://i.ndtvimg.com/i/2015-09/balanced-diet_625x578_71441628210.jpg" alt="" />
      </div>
      <div className="col-lg-6">
        <img style={{borderRadius: '5%', display:'inline', float:'right',marginTop: '2rem', marginLeft: '2rem',  width: '90%', height: '90%'}} src="https://i.pinimg.com/originals/82/08/8c/82088c9f6738714d658abd5ab42bc4fc.jpg" alt="" />
      </div>
      <div className="col-lg-6">
        <img style={{borderRadius: '5%', display:'inline', marginTop: '2rem', marginLeft: '2rem', width: '90%', height: '90%'}} src="https://possible.in/wp-content/uploads/2020/11/Women-Diet-Chart.jpg" alt="" />
      </div>
      <div className="col-lg-6">
        <img style={{borderRadius: '5%', display:'inline', float:'right',marginTop: '2rem', marginLeft: '2rem',  width: '90%', height: '90%'}} src="https://www.motherjones.com/wp-content/uploads/USDAgood.jpg" alt="" />
      </div>
     </div>
    </div>
    </>
  )
}
