import "./Destination.css"
const Destination = () => {
  return (
    <div>
       <h6 className='Desh6'>Where to?</h6>
       <div className="search-bar-container1">
       <input
        type='text'
        placeholder="Email address"
        className="search-input1"
      />
        <input
        type='date'
        placeholder="Email address"
        className="search-input1"
      />
      <button className="subscribe-button1">Subscribe Now</button>
    </div>
    <div className='box1'>
         <div className='promo'>Find and book your perfect stay</div>
         <div className='subpromo'>Earn rewards on every night <br /> you stay</div>
         <div className='subpromo'>Save more with<br /> Member Prices</div>
         <div className='subpromo'>Free cancellation <br />options if plans <br />change</div>
    </div>
    </div>
  )
}

export default Destination
