import './App.css';
import Home from './Pages/Home';
import AttackLayer from './Pages/AttackLayer';
import AppLayer from './Pages/AppLayer';
import TINLayer from './Pages/TINLayer';
import AppLayerStatus from './Pages/AppLayerStatus';
import TINLayerStatus from './Pages/TINLayerStatus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/attacklayer' element={<AttackLayer />}/>
          <Route path='/applayer' element={<AppLayer />}/>
          <Route path='/tinlayer' element={<TINLayer />}/>
          <Route path='/applayer-status' element={<AppLayerStatus />}/>
          <Route path='/tinlayer-status' element={<TINLayerStatus />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
