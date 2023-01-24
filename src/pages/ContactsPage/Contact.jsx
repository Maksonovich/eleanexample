import React from 'react'
import Yandexmaps from '../../Components/YandexMaps/Yandexmaps'

const Contact = () => {

  const hStyle = {
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "20px",
    textAlign: "center",
    letterSpacing: "0.05em",
    color: "#272727",
    textTransform: "uppercase",
    padding: "40px"
  }

  return (
    <div className='container'>
      <h1 style={hStyle}>Контакты</h1>
      <div className='innerLeft'>
        <div className='YMaps'>
          <Yandexmaps />
        </div>
      </div>
      <div className='innerRight'>
        <div className='RightContactfirst'>
          <div className="numberfirstcontact">
              
          </div>
          <div className="numberfirstcontact">

          </div>
          <div className="numberfirstcontact">
  
          </div>
          <div className="numberfirstcontact">

          </div>
          <div className="numberfirstcontact">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact