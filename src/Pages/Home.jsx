import React from 'react';
import "./Home.css";
import Mahabaleshwar from "../assets/images/Mahabaleshwar.jpg"
import Shimla from "../assets/images/Shimla.webp"
import Goa from "../assets/images/Goa.webp"
import Manali from "../assets/images/Manali.jpg"
import Punjab from "../assets/images/Punjab.jpg"
import Redfort from "../assets/images/Red fort.jpg"
import Ellora from "../assets/images/Ellora.jpg"
import Mysore from "../assets/images/Mysore.jpg"
import konark from "../assets/images/Konark.jpg"

const Home = () => {
  return (
    <div>
      <br />
      <div className="background">
        <h1><b>Plan. Travel. <br />Create Lasting Memories.</b></h1>
      </div>
      <h3>Explore stays in popular destinations</h3>
      <div className='cardflex'>
        <div className="card">
      <img src={Mahabaleshwar} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Mahabaleshwar</h2>
        <p className="card-description">description</p>
      </div>
    </div>
    <div className="card">
      <img src={Shimla} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Shimla</h2>
        <p className="card-description">description</p>
      </div>
    </div>
    <div className="card">
      <img src={Goa} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Goa</h2>
        <p className="card-description">description</p>
      </div>

    </div>
    <div className="card">
      <img src={Manali} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Manali</h2>
        <p className="card-description">description</p>
      </div>
      
    </div>
    <div className="card">
      <img src={Redfort} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Red Fort</h2>
        <p className="card-description">description</p>
      </div>
    </div>
    <div className="card">
      <img src={Ellora} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Ellora Caves</h2>
        <p className="card-description">description</p>
      </div>
    </div>
    <div className="card">
      <img src={Mysore} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Mysore Palace</h2>
        <p className="card-description">description</p>
      </div>
    </div> <div className="card">
      <img src={konark} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Konark Sun temple</h2>
        <p className="card-description">description</p>
      </div>
    </div>
 
    <div className="card">
      <img src={Punjab} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Punjab</h2>
        <p className="card-description">description</p>
      </div>
      
    </div>
    
    </div>
    <div className='Bg1top'>
      <h4>Travel Insipartion delivery will be <br /> delivered to your inbox</h4>
      <div className="search-bar-container">
      <input
        type="text"
        placeholder="Email address"
        className="search-input"
      />
      <button className="subscribe-button">Subscribe Now</button>
    </div>
    </div>
   <div className='lastbg'><br /><br /><br /><h5 className='header2'>We will guide for <br />your best experiences</h5><br /><pre className="footer-paragraph">
    We will guide you for your best experiences, ensuring your travel is <br />smooth, memorable, and tailored to your needs. Let us make your journey 
    <br />extraordinary!
</pre></div>
<footer>
        <div>
            &copy;copyright 2025
        </div>
        <b>
                Designed by mee
            </b>
    </footer>
    </div>
  );
};

export default Home;

