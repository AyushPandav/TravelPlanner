import React from 'react'
import "./About.css"
import sanji from "../assets/images/sanji.jpg"

const About = () => {
  return (
    <div>
      <div className='About-container'>
        <h1 className='abouth1'>About Travit</h1>
        <p className='aboutp'>where your travel dreams come to life! <br />Explore breathtaking destinations, plan unforgettable adventures, and let us guide you every step of the way.  <br />Your perfect journey starts here!</p>
      </div>
      <div className='abouttravit'>
        <h2 className='abouth2'>What is Travit</h2>
        <p className='aboutp1'>We are here to transform your travel planning experience. Whether you’re dreaming of serene beaches, majestic mountains, or bustling cities,<br /> our platform is designed to help you find and explore the perfect destinations. With curated recommendations, interactive tools, and personalized itineraries,<br /> we aim to make your journey seamless and unforgettable.</p>

      </div>
      <div className='aboutdev'>
        <h2 className='abouth2dev'>Meet the dev</h2>
        <br /><br />
        <div className='Aboutcenter'>  
          <div className="card1">
              <img src={sanji} alt="" className="card-image1" />
              <div className="card-content1">
                <h2 className="card-title1">Ayush Pandav</h2>
                <p className="card-description1">A College Student trying to be a full stack dev</p>
              </div>
              
            </div>
            </div>
      </div>
      <footer>
        <div>
            &copy;copyright 2025
        </div>
        <b>
                Designed by mee
            </b>
    </footer>
    </div>
  )
}

export default About
