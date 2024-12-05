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
import hlopok from '../src/img/hlopoc_1.png'
import house from '../src/img/house.svg'
import Kinfolk from '../src/img/Kinfolk.svg'
import line_58 from '../src/img/Line 58.svg'
import line from '../src/img/Line 60.svg'
import logo from '../src/img/logo.svg'
import men from '../src/img/men.svg'
import Numero from '../src/img/Numero.svg'
import photo from '../src/img/photo.svg'
import poshiv from '../src/img/poshiv_1.png'
import premium_st from '../src/img/premium_st.svg'
import retarn from '../src/img/retarn.svg'
import shirt_model from '../src/img/shirt_model.svg'
import shirt from '../src/img/shirt.svg'
import tkan from '../src/img/tkan_1.png'
import woman_m1 from '../src/img/woman_m1.svg'
import woman_m2 from '../src/img/woman_m2.svg'
import woman_m3 from '../src/img/woman_m3.svg'
import woman_m4 from '../src/img/woman_m4.svg'
import woman from '../src/img/woman.svg'

function App() {
  return (
    <div className="App">

      <header className="color flex justify-between px-4 py-3">
        <img className=' ' src={dots} alt="" />
        <p className='text-sm font-bold'>SUMMER SALE UP TO 50% OFF</p>
        <img src={dots} alt='' />
      </header>

      <div className='items-center flex justify-center mx-28 my-10'>
        <img src={logo} alt='' className='imgbg' />
      </div>

      <div className=' flex justify-center w-full'>
        <img src={photo} alt='' className='imgbg' />
        <div className='h'>
          <p>Spring Season</p>
        </div>
        <button className='g flex items-center justify-between'>
          <p>view collection</p>
          <img src={ar} alt='' className='px-3' />
        </button>
      </div>

      <div className='h-28 bg-orange-500 '>
        <div className='py-10 flex items-center justify-between mx-28'>
          <img src={Numero} alt="" />
          <img src={Business_ins} alt='' />
          <img src={Kinfolk} alt='' />
          <img src={Fashionbeans} alt='' />
          <img src={Hiperbeast} alt='' />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='shirt1 w-1/2'>
          <div className='w-full flex justify-between px-28'>
            <img src={arl} alt="" />
            <img src={shirt} alt='' className='w-96' />
            <img src={arr} alt='' />
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
            <img src={shirt_model} alt='' className='w-full' />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center py-16 gap-10'>
        <div className='l flex items-center justify-between rounded-md'>
          <img src={blue_men} alt="" className='imgbg' />
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
          <img src={woman} alt='' className='people_1' />
          <button className='ar_black_1 flex items-center justify-between'>
            <p>WOMEN</p>
            <img src={ar_black} alt='' className='px-3' />
          </button>
          <img src={men} alt='' className='people_2' />
          <button className='ar_black_2 flex items-center justify-between'>
            <p>MEN</p>
            <img src={ar_black} alt='' className='px-3' />
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
        <div className='block_6 border-2 p-10 flex justify-center gap-36 rounded-md'>
          <div className="block_3.1 border-2 py-3 pl-3">
            <img src={bloomberg} alt='' />
            <div className='h-40 p-3 w-80'>
              <p>“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
              <div>
                <button className='ar_purple_1 flex items-center justify-between'>
                  <p>Read article</p>
                  <img src={ar_purple} alt='' className='px-3' />
                </button>
              </div>
            </div>
          </div>

          <div className="block_3.2 border-2 py-3 pl-3">
            <img src={forbes} alt='' />
            <div className='h-24 p-3 w-80'>
              <p>“First light proves it is possible to combine great design with the finest materials available.”</p>
            </div>
            <div>
              <button className='ar_purple_2 flex items-center justify-between'>
                <p>Read article</p>
                <img src={ar_purple} alt='' className='px-3' />
              </button>
            </div>
          </div>

          <div className="block_3.3 border-2 py-3 pl-3">
            <img src={fast_company} alt='' />
            <div className='h-24 p-3 w-80'>
              <p>“Redefining excellence with premium materials and visionary robust design.”</p>
              <button className='ar_purple_3 flex items-center justify-between'>
                <p>Read article</p>
                <img src={ar_purple} alt='' className='px-3' />
              </button>
            </div>
          </div>
        </div>
      </div>



      <div>
        <div className='zag_1 grid justify-center'>
          <p>Women — Must Haves</p>
        </div>
        <div className='flex justify-center gap-8'>
          <img src={button_left} alt='' />
          <img src={woman_m1} alt='' className='l_1 w-96' />
          <div>
            <p className='tx_mod_1_1 items-center'>Basik Shirt</p>
            <p className='tx_mod_1_2 items-center'>€49</p>
          </div>
          <img src={woman_m2} alt='' className='l_1 w-96' />
          <div>
            <p className='tx_mod_2_1 items-center'>Beige Jumper</p>
            <p className='tx_mod_2_2 items-center'>€99</p>
          </div>
          <img src={woman_m3} alt='' className='l_1 w-96' />
          <div>
            <p className='tx_mod_3_1 items-center'>Signature Jacket</p>
            <p className='tx_mod_3_2 items-center'>€249</p>
          </div>
          <img src={woman_m4} alt='' className='l_1 w-96' />
          <div>
            <p className='tx_mod_4_1 items-center'>Navy Jumper</p>
            <p className='tx_mod_4_2 items-center'>€49</p>
          </div>
          <img src={botton_right} alt='' />
        </div>
        <div>
        </div>
      </div>

      <div>
        <div className='zag_1 grid justify-center mt-28'>
          <p>We always have your back</p>
        </div>
        <div className='flex justify-center gap-3'>
          <img src={hlopok} alt=''className='block_card rounded-md'/>
          <div className='flex items-center justify-center'>
            <button className='button_hlopok bg-black rounded-md'><p className='nado'>100% Premium Cotton</p><br/>We use ethically sourced cotton only.</button>
          </div>
          <div>
            <img src={poshiv} alt='' className='mb-6 block_card_1 rounded-md'/>
            <div className='button_poshiv flex  items-center justify-center'>
              <button className='button_poshiv bg-black rounded-md'><p className='nado'>Made in Portugal</p><br/>With hand finished details</button>
            </div>
            <img src={tkan} alt='' className='block_card_2 rounded-md'/>
            <div className='button_tkan flex items-center justify-center'>
              <button className='button_tkan bg-black rounded-md'><p className='nado'>Breathable material</p><br/>Keeping you cool throughout the day</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex'>
        <div>
          <img src={hlopok} alt="" />
          <button><p>100% Premium Cotton</p><br/>We use ethically sourced cotton only.</button>
        </div>
        <div className='blok'>
          <div className=''>
            <img src={poshiv} alt="" />
            <button><p>100% Premium Cotton</p><br/>We use ethically sourced cotton only.</button>
          </div>
          <div>
            <img src={tkan} alt="" />
            <button><p>100% Premium Cotton</p><br/>We use ethically sourced cotton only.</button>
          </div>
        </div>
      </div> */}

      <div className='mt-20 border-2'>
        <div className='o flex justify-center gap-32'>
          <div className='flex items-center'>
            <img src={premium_st} alt='' />
            <p className='pl-2'>Premium stain <br />resistant fabrics</p>
          </div>
          <div className='flex items-center'>
            <img src={expres} alt='' />
            <p className='pl-2'>Free Express <br />Shipping</p>
          </div>
          <div className='flex items-center'>
            <img src={retarn} alt='' />
            <p className='pl-2'>Free returns <br />within 30 days</p>
          </div>
          <div className='flex items-center'>
            <img src={custom} alt='' />
            <p className='pl-2'>Customers rate <br />us 4.8 / 5.0</p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mb-10 mt-12'>
        <div className='justify-center'>
          <img src={house} alt='' className='last_photo'/>
        </div>
        <div className='last_card'>
          <p className='last_text1 items-center justify-center px-16'>Visit our popup shop</p>
          <p className='last_text2 items-center justify-center px-16'>Willemsparkweg 63<br></br> 1071 GS Amsterdam<br></br> The Netherlands</p>
          <div className='flex gap-10'> 
          <ul className='spisok1 px-16'>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
            <ul className='spisok2'>
            <li>12.00-19.00</li>
            <li>10.00-19.00</li>
            <li>10.00-19.00</li>
            <li>10.00-21.00</li>
            <li>10.00-19.00</li>
            <li>10.00-18.00</li>
            <li>12.00-18.00</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
