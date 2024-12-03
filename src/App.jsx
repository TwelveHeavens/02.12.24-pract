import './index.css';
import ar from '../src/img/Ar.svg'
import arl from '../src/img/ArrowLeft.svg'
import arr from '../src/img/ArrowRight.svg'
import bloomberg from '../src/img/Bloomberg.svg'
import blue_men from '../src/img/blue_men.svg'
import Business_ins from '../src/img/Business_ins.svg'
import button_left from '../src/img/Button_left.svg'
import botton_right from '../src/img/Button_right.svg'
import custom from '../src/img/custom.svg'
import dots from '../src/img/dots.svg'
import expres from '../src/img/expres.svg'
import Fashionbeans from '../src/img/Fashionbeans.svg'
import fast_company from '../src/img/Fast company.svg'
import forbes from '../src/img/Forbes.svg'
import Hiperbeast from '../src/img/Hiperbeast.svg'
import hlopok from '../src/img/hlopoc.svg'
import house from '../src/img/house.svg'
import Kinfolk from '../src/img/Kinfolk.svg'
import line_58 from '../src/img/Line 58.svg'
import line from '../src/img/Line 60.svg'
import logo from '../src/img/logo.svg'
import men from '../src/img/men.svg'
import Numero from '../src/img/Numero.svg'
import photo from '../src/img/photo.svg'
import poshiv from '../src/img/poshiv.svg'
import premium_st from '../src/img/premium_st.svg'
import retarn from '../src/img/retarn.svg'
import shirt_model from '../src/img/shirt_model.svg'
import shirt from '../src/img/shirt.svg'
import tkan from '../src/img/tkan.svg'
import woman_m1 from '../src/img/woman_m1.svg'
import woman_m2 from '../src/img/woman_m2.svg'
import woman_m3 from '../src/img/woman_m3.svg'
import woman_m4 from '../src/img/woman_m4.svg'
import woman from '../src/img/woman.svg'

function App() {
  return (
    <div className="App">

      <header className="color flex justify-between px-4 py-3">
        <img className=' ' src={dots} alt=""/>
        <p className='text-sm font-bold'>SUMMER SALE UP TO 50% OFF</p>
        <img src={dots} alt=''/>
      </header>

      <div className='items-center flex justify-center mx-28 my-10'>
        <img src={logo} alt='' className='imgbg'/>
      </div>

      <div className=' flex justify-center w-full'>
        <img src={photo} alt='' className='imgbg'/>
        <div className='h'>
          <p>Spring Season</p>
        </div>
        <div className='g flex items-center justify-between'>
          <p>view collection</p>
          <img src={ar} alt='' className='px-3'/>
        </div>
      </div>

      <div className='h-28 bg-orange-500 '>
        <div className='py-10 flex items-center justify-between mx-28'>
          <img src={Numero} alt=""/>
          <img src={Business_ins} alt=''/>
          <img src={Kinfolk} alt=''/>
          <img src={Fashionbeans} alt=''/>
          <img src={Hiperbeast} alt=''/>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='shirt1 w-1/2'>
          <div className='w-full flex justify-between px-28'> 
            <img src={arl} alt=""/>
            <img src={shirt} alt='' className='w-96'/>
            <img src={arr} alt=''/>
            <div className='u items-center '>
              <p>Basic Shirt</p>
            </div>

            <div className='k items-center'>
              <p>€49</p>
            </div>
          </div>
        </div>

        <div className='shirt2 w-1/2'>
          <div className='f flex bg-black items-center justify-center rounded-md'>
            <button>Shop Shirts</button>
          </div>

          <div className='w-full'>
            <img src={shirt_model} alt='' className='w-full'/>
          </div>
        </div>   
      </div>

      <div>
        <div className='l flex py-16 items-center justify-between mx-28 w-1/2 '>
          <img src={blue_men} alt=""/>
        </div>
        <div className='flex bg-orange-500 w-1/2'>

        </div>
      </div>
    </div>
  );
}

export default App;
