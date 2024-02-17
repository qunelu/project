import './Home.scss'
import Serv from '../../components/serv/serv.jsx'
import Coffee from '../../components/coffee/coffee.jsx'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function Home(props) {
  const [user, setUser] = ("")
  const auth = getAuth()
  const navigate = useNavigate()
  function singOutBtn(){
    signOut(auth)
    navigate("/login")
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userServ)=>{
      if(userServ){
        setUser(userServ)
      }else{
        navigate("/login")
      }
    })
  },[])
  
  if(!user){
    return
  }
  return (
<div>
  <div className="container-first">
    <button onClick={singOutBtn}>SignOut</button>
    <div className="info">
      <img src={props.face} alt=" " />
      <div className="info-text">
        <h2 className='text-title'>Our Story</h2>
        <p className='text-story'>Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world.
        From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. 
        For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. 
        On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. 
        Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!</p>
        <button className='info-more'>More</button>
      </div>
    </div>
    <div className="points">
      <img src={props.point3} alt="" />
      <img src={props.point2} alt="" />
      <img src={props.point1} alt="" />
    </div>
  </div>
  <div className="container-second">
    <h2 className='services-title'>
    Services 
    </h2>
    <div className='services-cards'>
      <Serv text = {'Equipment'} img={props.serv1}/>
      <Serv text = {'Type of coffee'} img={props.serv2}/>
      <Serv text = {'Take a way '}  img={props.serv3}/>
      <Serv text = {'Beans variant'} img={props.serv4}/>
      <Serv text = {'Pastry'} img={props.serv5}/>
    </div>
  </div>
  <div className="container-third">
    <div className="third-left">
      <h2 className='third-offer'>Offer</h2>
      <h3 className='third-off'>Up to 50% off </h3>
      <p className='third-text'>At our cafe, we take pride in providing our customers with the best coffee around. 
        Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. </p>
      <button className='third-button'>Shop now</button>
    </div>
    <div className="third-right">
      <img src={props.packs} alt="" />
    </div>
  </div>
  <div className="container-fourth">
    <h2 className='fourth-title'>
    Reserve a Table 
    </h2>
    <div className='fourth-main'>
      <img src={props.fourthbg} alt="" />
      <div className="inputs">
        <input type="" placeholder='Date' className='date' />
        <div className="TimeGuest">
          <select id="Time">
            <option value="#">Time</option>
            <option value="1">10:00-11:00</option>
            <option value="2">11:00-12:00</option>
            <option value="3">12:00-13:00</option>
            <option value="4">13:00-14:00</option>
            <option value="4">14:00-15:00</option>
            <option value="4">15:00-16:00</option>
            <option value="4">16:00-17:00</option>
            <option value="4">17:00-18:00</option>
            <option value="4">18:00-19:00</option>
            <option value="4">19:00-20:00</option>
            <option value="4">20:00-21:00</option>
          </select>
          <select id="guests">
            <option value="#">Guest</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <input type="text" placeholder='your name'  className='name'/>
        <input type="text" placeholder='your phone' className='phone'/>
        <div className="MailRes">
          <input type="text" placeholder='your email' />
          <button>Reserve</button>
        </div>

      </div>
    </div>
  </div>
  <div className="container-fifth">
    <h2 className='fifth-title'>
      Our Menu
    </h2>
    <div className='menu-positions'>
      <div className="menu-left">
        <Coffee title = {'Cappuccino'} cost = {'25$'}/>
        <Coffee title = {'Latte'} cost = {'25$'}/>
        <Coffee title = {'Raf'} cost = {'30$'}/>
      </div>
      <div className="menu-right">
        <Coffee title = {'Espersso'} cost = {'20$'}/>
        <Coffee title = {'Americano'} cost = {'20$'}/>
        <Coffee title = {'Mocha'} cost = {'25$'}/>
      </div>
    </div>
  </div>
</div>
            
    
  )
}
