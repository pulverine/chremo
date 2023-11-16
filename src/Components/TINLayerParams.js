import React from 'react'
import Logo from '../Assets/Logo.jpg'
import Chremo_SS from '../Assets/Chremo_SS.png'
import { Link } from 'react-router-dom';

const TINLayerParams = () => {
  return (
    <div>
        <div className='param-container'>
            <div className='logo-section'>
                <img className = "logo" src={Logo} alt="company-logo"/>
            </div>

            <div className='parameters'>
                <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>
                <h2>Transport Layer, Internet Layer<br></br>Network Layer</h2>
                
                <div className='tin-param-fields'>
                    <textarea rows="10"></textarea>
                    <Link to='/tinlayer-status' ><button className="btn-login" type="submit">Predict</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TINLayerParams