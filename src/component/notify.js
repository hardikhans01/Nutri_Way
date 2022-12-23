import React from 'react'
import { Link } from 'react-router-dom'
export default function notify() {
  return (
 <>
    <div id="content">
      {/* <!-- NavBar --> */} 
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{backgroundColor: '#ceecf7', padding: '2rem 10% 0',fontFamily: 'Poppins, sans-serif'}}>
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
              <Link className="nav-link" to="/"
                >Home <span className="sr-only"></span></Link
              >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dietary_chart.html">Dietary Chart</Link>
            </li>
            <li className="nav-item active" >
              <Link className="nav-link" to="/notify.html"
                style={{backgroundColor: 'rgb(22, 90, 216)', borderRadius: '5%' }}>Notify Me<span className="sr-only"></span></Link
              >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact_us.html">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!--    Form    --> */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div
          className="container-fluid card"
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '5vh',
            paddingBottom: '4vh',
            margin: '10vh 3vh 4vh',
            background: 'powderblue'
          }}
        >
          <h4
            style={{
              textAlign: 'center',
              marginBottom: '6vh',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bolder',
              fontSize: '250%'
            }}
          >
            Get Notified for Free!
          </h4>
          <form>
            <div className="row container-fluid" style={{margin: 0}}>
              <div className="form-group col-lg-4 col-md-4 col-sm-12">
                <label>Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  pattern="[a-zA-Z][a-zA-Z ]+"
                  placeholder="Jimmy Walter"
                />
              </div>
              <div className="form-group col-lg-4 col-md-4 col-sm-12">
                <label>Email address</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="abc@example.com"
                />
              </div>
              <div className="form-group col-lg-4 col-md-4 col-sm-12">
                <label>Pincode</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="pincode"
                  pattern="[0-9]{6}"
                  aria-describedby="emailHelp"
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div
              className="col-lg-12"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: '2vh',
              }}
            >
              <button className="btn btn-primary btn-md" style={{marginRight: '1vh' , width: 'auto'}}>
                Notify Me!
              </button>
              <div
                style={{textAlign: 'center', marginRight: '1vh'}}
                className="g-signin2"
                data-onsuccess="onSignIn"
              ></div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h3 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif'}}></h3>
      </div>
    </div>

 </>
  )
}
