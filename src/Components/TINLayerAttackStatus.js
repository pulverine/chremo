import React from 'react';
import Logo from "../Assets/Logo.jpg";
import Chremo_SS from "../Assets/Chremo_SS.png";
import { Link } from 'react-router-dom';

const TINLayerAttackStatus = () => {
  return (
    <div className='layer-select'>
        <div className='logo-section'>
            <img className = "logo" src={Logo} alt="company-logo"/>
        </div>

        <div className="network-layers">
            <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>
        
            <div className='tin-layer-2'>
                <Link to='/tinlayer'><button>Transport Layer</button></Link>
                <Link to='/tinlayer'><button>Internet Layer</button></Link>
                <Link to='/tinlayer'><button>Network Layer</button></Link>
            </div>

            <div className='tin-attack-status'>
                <h2>Attack Unsuccessful</h2>
            </div>

        </div>
    </div>
  )
}

export default TINLayerAttackStatus