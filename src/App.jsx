import { useState } from 'react';
import './App.css';
import Img from './img/digital.jpg'

function App() {
  
    const [mode, setMode] = useState(true)
  
  function fnModal(){
    setMode(!mode)
    console.log(mode);
  }
  return (
    <div className="App">
      
       <div className="wrapperr" onClick={fnModal}>
        <div className={mode ? 'modal' : 'modall'}>
          <div className="modal__top">
            <img className='img' src={Img} alt="" />
            <hr />
          </div>
          <div className="modal__body">
            <h4>Digital City o'quv markazimizga tashrif buyuring</h4>
          </div>
          <hr />
          <div className="box">
          <button onClick={fnModal} className='btn'>Close</button>
          <button className='btn'>Save</button>
          </div>
          <hr />
        </div>
       
       </div>
       <button onClick={fnModal} className={mode ? 'btn' : 'none'}>Open modal</button>
    </div>
  );
}

export default App;
