import './index.css';
import ar_black from '../src/img/ar_black.svg'
import ar_purple from '../src/img/ar_purple.svg'
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
        <button className='g flex items-center justify-between'>
          <p>view collection</p>
          <img src={ar} alt='' className='px-3'/>
        </button>
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
          <div className='button_1 flex bg-black items-center justify-center rounded-md'>
            <button>Shop Shirts</button>
          </div>

          <div className='w-full'>
            <img src={shirt_model} alt='' className='w-full'/>
          </div>
        </div>   
      </div>

      <div className='flex items-center justify-center py-16 gap-10'>
        <div className='l flex items-center justify-between rounded-md'>
          <img src={blue_men} alt="" className='imgbg'/>
          <div className='button_2 flex bg-black items-center justify-center rounded-md'>
            <button>Shop Sweaters</button>
          </div>
        </div>
        <div className='v bg-orange-500 rounded-md'>
          <div className='v_1 px-10 mt-10 items-center justify-center'>
            <p>“ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “</p>
          </div>
          <div className='v_2 px-10 mt-80'>
            <p>— Guera Latissa, Creative Director</p>
          </div>
        </div>
      </div>

      
      <div className='items-center my-28 '>
        <div className='flex justify-center'>
         <img src={woman} alt='' className='people_1'/> 
         <button className='ar_black_1 flex items-center justify-between'>
          <p>WOMEN</p>
          <img src={ar_black} alt='' className='px-3'/>
        </button>
        <img src={men} alt='' className='people_2'/>
        <button className='ar_black_2 flex items-center justify-between'>
        <p>MEN</p>
        <img src={ar_black} alt='' className='px-3'/>
        </button>
          
        </div>
      </div>




      {/* div_1 */}
      <div className='big_block mb-20 mx-40'>

      {/* div_2.1 */}
        <div className='zag_1 grid justify-center'>
          <p>Hot off the press</p>
        </div>

        {/* div_2.2 */}
        <div className='block_6 border-2 flex justify-center gap-36'>
          <div className="block_3.1 border-2">
            <img src={bloomberg} alt=''/>
            <div className='h-24 w-80'>
              <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
              <div>
                <button className='ar_purple_1 flex items-center justify-between'>
                  <p>Read article</p>
                  <img src={ar_purple} alt='' className='px-3'/>
                </button>
              </div>
            </div>
          </div>

          <div className="block_3.2 border-2">
            <img src={forbes} alt=''/>
            <div className='h-24 w-80'>
              <p>“First light proves it is possible to combine great design with the finest materials available.”</p>
            </div>
            <div>
              <button className='ar_purple_2 flex items-center justify-between'>
                <p>Read article</p>
                <img src={ar_purple} alt='' className='px-3'/>
              </button>
            </div>
          </div>
          
          <div className="block_3.3 border-2">
            <img src={fast_company} alt=''/>
            <div className='h-24 w-80'>
              <p>“Redefining excellence with premium materials and visionary robust design.”</p>
              <button className='ar_purple_3 flex items-center justify-between'>
                <p>Read article</p>
                <img src={ar_purple} alt='' className='px-3'/>
              </button>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div>
          <p></p>
        </div>
        <div className='flex'>
          <img src={button_left} alt=''/>
          <img src={woman_m1} alt=''/>
          <div>
            <p>Basik Shirt</p>
             <p>€49</p>
          </div>
          <img src={woman_m2} alt=''/>
          <div>
            <p>Beige Jumper</p>
             <p>€99</p>
          </div>
          <img src={woman_m3} alt=''/>
          <div>
            <p>Signature Jacket</p>
             <p>€249</p>
          </div>
          <img src={woman_m4} alt=''/>
          <div>
            <p>Navy Jumper</p>
             <p>€49</p>
          </div>
          <img src={botton_right} alt=''/>
        </div>
        <div>
        </div>
      </div>

      <div>
        <div>
          <p>We always have your back</p>
        </div>
        <div className='flex'>
          <img src={hlopok} alt=''/>
          <div>
            <img src={poshiv} alt=''/>
            <img src={tkan} alt=''/>
          </div>
        </div>
      </div>

      <div>
        <img src={line_58} alt=''/>
        <div>
          <img src={premium_st} alt=''/>
          <div>
            <p>Premium stain resistant fabrics</p>
          </div>
          <img src={expres} alt=''/>
          <div>
            <p>Free Express Shipping</p>
          </div>
          <img src={retarn} alt=''/>
          <div>
            <p>Free returns within 30 days</p>
          </div>
          <img src={custom} alt=''/>
          <div>
            <p>Customers rate  us 4.8 / 5.0</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={house} alt=''/>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default App;
