import React from 'react';
import Logo from "../Assets/Logo.jpg";
import Chremo_SS from "../Assets/Chremo_SS.png";


const AppLayerAttack = () => {
  return (
    <div className='layer-select'>
        <div className='logo-section'>
            <img className = "logo" src={Logo} alt="company-logo"/>
        </div>

        <div className="network-layers">
            <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>

            <div className='app-layer-2'>
                Application Layer
            </div>
            <div className='app-attack-status'>
                <h2>Attack Unsuccessful</h2>
            </div>
        </div>
    </div>
  )
}

export default AppLayerAttack