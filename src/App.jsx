import './index.css';
import dots from '../src/img/dots.svg'
import logo from '../src/img/logo.svg'
import phpoto from '../src/img/photo.svg'
import Business_ins from '../src/img/Business_ins.svg'
import Numero from '../src/img/Numero.svg'
import ar from '../src/img/Ar.svg'

function App() {
  return (
    <div className="App">
      <header className="color flex justify-between px-4 py-3">
        <img className=' ' src={dots} alt=""/>
        <p className='text-sm font-bold'>SUMMER SALE UP TO 50% OFF</p>
        <img src={dots} alt=''/>
      </header>
      <div className='items-center flex justify-center n-[280px] gap [57px]'>
        {/* <img src={logo} alt=''/>
      <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>  */}
       
      </div>
      <div className='flex items-center justify-center'>
          <img src={Numero} alt=""/>
          <img src={Business_ins} alt=''/>
      <div>
          {/* <div className='text text-[32px] px-[1161] mt-[110px] font-bold'>
            <p>view colllection</p>
          </div>
          <div>
            <img src={ar} alt=""/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
