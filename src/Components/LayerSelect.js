import React from 'react'
import Logo from '../Assets/Logo.jpg'
import Chremo_SS from '../Assets/Chremo_SS.png'
import { Link } from 'react-router-dom'

const LayerSelect = () => {
  return (
    <div className='layer-select'>
        <div className='logo-section'>
            <img className = "logo" src={Logo} alt="company-logo"/>
        </div>

        <div className="network-layers">
            <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>

            <div className='app-layer'>
                <Link to="/applayer"><button>Application Layer</button></Link>
                
            </div>
        
            <div className='tin-layer'>
                <Link to='/tinlayer'><button>Transport Layer</button></Link>
                <Link to='/tinlayer'><button>Internet Layer</button></Link>
                <Link to='/tinlayer'><button>Network Layer</button></Link>
            </div>
        </div>
    </div>
        
    
  )
}

export default LayerSelect