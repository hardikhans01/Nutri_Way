import React from 'react'
// import img1 from './1.svg'
import img2 from './3.svg'
import img3 from './nutri.png'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
export default function page() {
  return (
   <>
   {/* <div id="loader">
    <img src="./public/plaster-new.gif" alt=""/>
  </div> */}
  <div id="content">
    {/* <!-- NavBar --> */}
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ceecf7', padding: '2rem 10% 0',fontFamily: 'Poppins, sans-serif'}}>
      <Link className="navbar-brand" to="/">
        {/* <img src={img1} style={{width:'3%', height:'3%'}} className="d-inline-block align-top" alt=""/> */}
        Nutri Way
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse me-1" id="navbarNav" style={{justifyContent: 'end'}}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{backgroundColor: 'rgb(22, 90, 216)', borderRadius: '5%' }}>Home <span className="sr-only" ></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dietary_chart.html">Dietary Chart</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/notify.html">Notify Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact_us.html">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* <!-- First div --> */}
    <div className="container-fluid" style={{backgroundColor:'#ceecf7', width:'100%', padding:'8% 10%'}}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12"
          style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 style={{fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', fontSize: '2.3em'}}>Live healthy with Nutri Way</h1>
          <div>
            <div className="container-fluid">
              <div className="row" style={{paddingTop: '6%'}}>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{padding: '0 0 3%'}}>
                  <i className="fas fa-calendar-week fa-2x" style={{color: '#07A6C2'}}></i>
                  <h5>Get Weekly Guidance</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{padding: '0'}}>
                  <i className="fas fa-bell fa-2x" style={{color: '#07A6C2'}}></i>
                  <h5>Get Notified Personally</h5>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12" style={{padding: '0'}}>
                  <i className="fas fa-calendar-check fa-2x" style={{color: '#07A6C2'}}></i>
                  <h5>Make an Appointment</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{padding: '0'}}>
                  <i className="fas fa-cloud-upload-alt fa-2x" style={{color: '#07A6C2'}}></i>
                  <h5>Healthy Subscription </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12" style={{padding: '7% 0 3%'}}>
                {/* <h5><button type="button" onClick="location.href = 'resgister-camp.html';" className="btn btn-md"
                    style={{backgroundColor: '#07A6C2', color: 'white', marginTop: '3vh'}}>Register Now!</button></h5> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/* <!-- <img src={img1} alt="" style="width: 70%"> --> */}
          <img src={img3} alt="" style={{width:'100%', paddingTop: '0.1rem', marginBottom: '5rem',borderRadius: '5%'}}/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12"></div>
          <div className="col-lg-6 col-md-12 col-sm-12">

                    {/* table in starting of home page */}
            <div className="card-group">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Female Obesity in India</h5>
                  <p className="card-text" style={{marginTop: '2.2rem'}}>6.2 %</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Male Obesity in India</h5>
                  <p className="card-text" style={{marginTop: '2.2rem'}}>3.2 %</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">India's diet quality Rank</h5><br/>
                  <p className="card-text" style={{marginTop: '-1.2rem'}}>77</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">India's Health index Rank</h5><br/>
                  <p className="card-text" style={{marginTop: '-1.2rem'}}>101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* <!-- Second Div --> */}
    <div className="container-fluid" style={{padding: '5%', paddingBottom: '8%',backgroundColor: 'white'}}>
      <h1 style={{textAlign: 'center',padding: '3% 0 2%'}}>Blogs</h1><br/>
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingBottom:'3%'}}>
            <div className="card shadow p-3 mb-5 bg-white rounded blog">
              <div className="card-body">
                 {/* <i className="fas fa-hospital" size:9x></i>  */}
                <h5 className="card-title">8 Best Exercises to lose fat</h5>
                <p className="card-text">These are some helpful exercise that everyone can do at home and they are really helpful in losing weight.</p>
                <a  href="https://www.healthline.com/nutrition/best-exercise-for-weight-loss#cycling"
                  className="btn hospital-btn btn-down" style={{backgroundColor: '#07A6C2', color: 'white'}}>Click here</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingBottom: '3%'}}>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body" style={{height: '15rem'}}>
                <h5 className="card-title">Weight loss Vs. Fat loss</h5>
                <p className="card-text">People have misconception about weight loss. Weight loss is much different from fat
                  loss.</p><br/>
                <a href="https://www.healthline.com/nutrition/weight-loss-vs-fat-loss"
                  className="btn btn-down" style={{backgroundColor: '#07A6C2', color:'white', marginTop: '3.5rem'}}>Click here</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingBottom: '3%'}}>
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body" style={{height: '15rem'}}>
                <h5 className="card-title">What should be done for a healthy living.</h5>
                <p className="card-text">There are some tips that have been verified by various researcher and nutritionist that are helpful in living a healthy life.</p><br/>
                <a className="btn btn-down" href='/' style={{backgroundColor: '#07A6C2', color: 'white', marginTop: '0.8rem'}}>Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Third Div --> */}
    <div className="container-fluid" style={{backgroundColor: '#b6ffe9', padding: '4% 0 0'}}>
      <h1 style={{textAlign: 'center', paddingBottom: '2%'}}>Subscription</h1>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12" style={{height: '28rem'}}>
          <div className="price_card"
            style={{height: '25rem', width: '18rem', background:'linear-gradient(135deg,rgb(70, 188, 243),rgb(145, 181, 236))', marginLeft:'3rem', marginTop: '2rem', borderRadius: '10%'}}>
            <h1 style={{textAlign:'center', paddingTop: '0.5rem'}}>Silver</h1>
            <br/><br/>
            <ul style={{fontSize: '1.5rem'}}>
              <li style={{marginBottom:'7%'}}>Weekly Nutrition tips</li>
              {/* <!-- <br/> --> */}
              <li style={{marginBottom:'7%'}}>Regular Guidance</li>
              <li style={{marginBottom:'7%'}}>Get latest Alerts</li>
              {/* <!-- <li></li> --> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12" style={{height: '28rem'}}>
          <div className="price_card"
            style={{height: '25rem', width: '18rem', background:'linear-gradient(135deg,rgb(70, 188, 243),rgb(145, 181, 236))', marginLeft:'3rem', marginTop: '2rem', borderRadius: '10%'}}>
            <h1 style={{textAlign: 'center', paddingTop: '0.5rem'}}>Gold</h1>
            <br/><br/>
            <ul style={{fontSize: '1.5rem'}}>
              <li style={{marginBottom:'7%'}}>Weekly Nutrition tips</li>
              {/* <!-- <br/> --> */}
              <li style={{marginBottom:'7%'}}>Regular Guidance</li>
              {/* <!-- <br/> -->/ */}
              <li style={{marginBottom:'7%'}}>Get latest Alerts</li>
              <li>Personalized Training</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12" style={{height: '28rem'}}>
          <div className="price_card"
            style={{height: '25rem', width: '18rem', background:'linear-gradient(135deg,rgb(70, 188, 243),rgb(145, 181, 236))' ,marginLeft:'3rem', marginTop: '2rem', borderRadius: '10%', paddingRight: '0rem'}}>
            <h1 style={{textAlign: 'center', paddingTop: '0.5rem'}}>Platinum</h1>
            <ul style={{fontSize: '1.5rem'}}>
              <li style={{marginTop: '8%', marginBottom: '7%'}}>Nutrition tips :- 2x a week</li>
              {/* <!-- <br/> --> */}
              <li style={{marginBottom:'7%'}}>Regular Guidance</li>
              {/* <!-- <br/> --> */}
              <li style={{marginBottom:'7%'}}>Get latest Alerts</li>
              {/* <!-- <br/> --> */}
              <li style={{marginBottom:'7%'}}>Personalized Training</li>
              <li>Chat feature available within website</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Fourth Div --> */}
      <div className="container-fluid" style={{padding: '4% 5% 5%', paddingTop: '8%'}}>
        <h1 style={{textAlign:'center', paddingBottom: '3%'}}>Get Notified!</h1>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12"
            style={{display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
            <div>
              <p>You didn't find any slot for Appointment?<br/>No problem we cover this for you! <br/>Just give your email address and we'll notify you a week before so that you don't have to check the slots again! <br/>Find this feature handy and useful?</p>
            </div>
            <div>
              <Link to="./notify.html" className="btn" style={{backgroundColor: '#07A6C2', color:'white'}}>Subscribe!</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign: 'center'}}>
            <img src={img2} alt="" style={{width: '50%', margin: '5%'}}/>
          </div>
        </div>
      </div>


      {/* <!-- Bootstrap Script --> */}
     
      <footer
        style={{backgroundColor:'#07A6C2', width: '100%', height:'3rem', textAlign: 'center', color: 'white', padding:'0.5%', fontSize: '1.2rem'}}>
        Made by 👨‍⚕️ Hardik Hans
      </footer>
    </div>
   </div>
   
   </>
  )

}
