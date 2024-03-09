import './App.scss'
import {useState} from "react"
import logo from './images/logo.png'
import person from './images/person.png'
import shopping from './images/shopping.png'
import cup from './images/Cup.png'
import hurryUp from './images/harryUp.png'
import point1 from './images/point1.png'
import point2 from './images/point2.png'
import point3 from './images/point3.png'
import face from './images/face.png'
import serv1 from './images/serv1.png'
import serv2 from './images/serv2.png'
import serv3 from './images/serv3.png'
import serv4 from './images/serv4.png'
import serv5 from './images/serv5.png'
import packs from './images/coffeepacks.png'
import fourthbg from './images/fourthbg.png'
import footer from './images/footer.png'
import location from './images/location.png'
import number from './images/number.png'
import mail from './images/mail.png'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import {Blog, Home, Comments, Error404, Login, Registration} from './pages'


function App(){
  return (
<Router>
<header>
  <div className="upSide">
    <div className="left-up">
      <nav className='byImages'>
        <nav>
          <NavLink to="/login">Log</NavLink>
          <NavLink to="/registration">Reg</NavLink>
          
        </nav>
        <img src={logo} alt="" />
        <div className="personaly">
          <img src={person} alt="" />
          <img src={shopping} alt="" />
        </div>
      </nav>
    </div>
    <div className="right-up">
     <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/comments">Comments</NavLink>
     </nav>
    </div>
  </div>
  <div className="downSide">
    <div className="left-down">
      <div className="container">
        <h1>Elza coffee</h1>
        <p>Today's good mood is sponsored by coffee search for your coffee now</p>
        <div className="choise">
          <button className='choise-shop'>Shop now</button>
          <button className='choise-catalog'>Catalog</button>
        </div>
      </div>
    </div>
    <div className="right-down">
      <div>
        <img src={cup} alt="" />
        <div className="text-rd">
          <h2>But first coffee</h2>
          <button>
            <p>Hurry up</p>
            <img src={hurryUp} alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
<main>
  <Routes>
    <Route path='/' element={<Home face={face}  serv1={serv1} serv2={serv2} serv3={serv3} serv4={serv4} 
    serv5={serv5} packs={packs} fourthbg={fourthbg} point1={point1} point2={point2} point3={point3}/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/comments' element={<Comments/>}/>
    <Route path='*' element={<Error404/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>  
  </Routes>
</main>    
<footer>
  <img src={footer} alt="" />
  <div className="container-footer">
    <div className="footer-up">
      <div className="colomn">
        <h3>About</h3>
        <p>Our story</p>
        <p>FAQ</p>
        <p>Careers</p>
      </div>
      <div className="colomn">
        <h3>Customer recourses </h3>
        <p>Menu</p>
        <p>Locations</p>
        <p>Support</p>
      </div>
      <div className="colomn">
        <h3>Services</h3>
        <p>Payment options</p>
        <p>Refunds & exchanges </p>
        <p>Limitation of liability </p>
      </div>
      <div className="info">
        <div className="information">
          <img src={location} alt="" />
          <p>12 jhon Avenue #35 - new York </p>
        </div>
        <div className="information">
          <img src={mail} alt="" />
          <p>Elizacoffee@coffee.com</p>
        </div>
        <div className="information">
          <img src={number} alt="" />
          <p>+1-222-34-eliza</p>
        </div>
      </div>
    </div>
    <div className="footer-down">
      <p className='footer-by'>
        Created By Elinaui9 
      </p>
      <p className='footer-by'>
        Copyright 2023 Eliza Coffee . All rights reserved.
      </p>
    </div>
  </div>
</footer> 

</Router>
  )
}





export default App
