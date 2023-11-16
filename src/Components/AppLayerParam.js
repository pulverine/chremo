import React from 'react';
import Logo from "../Assets/Logo.jpg";
import Chremo_SS from "../Assets/Chremo_SS.png";
import { Link } from 'react-router-dom';

const AppLayerParam = () => {
  return (
    <div>
        <div className='param-container'>
            <div className='logo-section'>
                <img className = "logo" src={Logo} alt="company-logo"/>
            </div>

            <div className='parameters'>
                <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>
                <h1>Application Layer</h1>
                
                <div className='param-fields'>
                    <div className='param-1'>
                        <label for="param1">1 </label>
                        <input type="text" id="param1" name="param1" required />
                    </div>
                    <div className='param-2'>
                        <input type="text" id="param2" name="param2" required />
                        <label for="param2">2</label>
                    </div>
                </div>
                <div className='param-fields'>
                    <div className='param-3'>
                        <label for="param1">3</label>
                        <input type="text" id="param1" name="param1" required />
                    </div>
                    <div className='param-4'>
                        <input type="text" id="param2" name="param2" required />
                        <label for="param2">4</label>
                    </div>
                </div>
                <div className='param-fields'>
                    <div className='param-5'>
                        <label for="param1">5</label>
                        <input type="text" id="param1" name="param1" required />
                    </div>
                    <div className='param-6'>
                        <input type="text" id="param2" name="param2" required />
                        <label for="param2">6</label>
                    </div>
                </div>
                <div className='param-fields'>
                    <div className='param-7'>
                        <label for="param1">7</label>
                        <input type="text" id="param1" name="param1" required />
                    </div>
                    <div className='param-8'>
                        <input type="text" id="param2" name="param2" required />
                        <label for="param2">8</label>
                    </div>
                </div>
                <div className='param-fields'>
                    <div className='param-9'>
                        <label for="param1">9</label>
                        <input type="text" id="param1" name="param1" required />
                    </div>
                    <div className='param-10'>
                        <input type="text" id="param2" name="param2" required />
                        <label for="param2">10</label>
                    </div>
                </div>
                <Link to='/applayer-status'><button className="btn-login" type="submit">Predict</button></Link>
            </div>
        </div>
    </div>
  )
}

export default AppLayerParam