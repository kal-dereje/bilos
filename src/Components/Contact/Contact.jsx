import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import { useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tb5ijcn',
        'template_xbmumyl',
        form.current,
        'WY7FSusrCEjpI50ng'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log('Not working');
        }
      );
    e.target.reset();
  };

  return (
    <div id='Contact' className=' sm:p-10 flex flex-col bg-[#1A1814]'>
      <div className='sm:m-10 mt-10 justify-center flex flex-col items-center '>
        <h1 className=' header-font m-6 text-3xl  '>
          <span className=' text-Bilos-primary'>Contact</span>
          <span className=' text-slate-300'> Us</span>{' '}
        </h1>
        <p className=' text-center  text-slate-300 p-5'>
          kjbdfj ajlfklsof alfk.haef ,bfliekl lqfbjkefb adlsbfjfb
          lwbrjef mBFLkefjbnfbn BFJBMFB sbfnbfjbdj kjbdfj ajlfklsof
          alfk.hae;f ,bfliekl lqfbjkefb adlsbfjfb lwbrjef
          mBFLkefjbnfbn BFJBMFB sbfnbfjbdj
        </p>
      </div>

      <div
        className="bg-[url('./assests/images/contact1.png')] cursor-pointer
 bg-cover bg-center sm:justify-between  flex justify-center flex-wrap relative mt-24 sm:p-10 shadow-gray-600 shadow-sm rounded-2xl">
        <div className=' relative m-6 flex flex-col sm:w-auto w-full items-center rounded-2xl pt-8 shadow-2xl bg-white bg-opacity-30 '>
          <div className='flex p-4 sm:m-8 w-72 transition  ease-in-out delay-150 hover:-translate-y-1 hover:rounded-xl rounded-xl hover:scale-110 hover:bg-white duration-300 '>
            <GoLocation className=' bg-Bilos-primary text-white text-4xl m-2 rounded-full border-0 p-2 ' />
            <div className='flex flex-col text-Bilos-third'>
              <h3 className='flex  text-2xl m-1 font-semibold text-Bilos-primary'>
                {' '}
                Location:{' '}
              </h3>
              <div className='flex-col w-40 text-black text-font'>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  Atlas branch | አትላስ <br />
                </div>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  Lancha Branch | ላንቻ
                  <br />
                </div>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  4 kilo | 4 ኪሎ
                  <br />
                </div>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  Bole Snap building <br />
                </div>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  Sarbet | ሳር ቤት <br />{' '}
                </div>
                <div className='flex mb-4'>
                  <AiOutlineArrowRight className='bg-Bilos-primary rounded-full text-white m-2' />
                  Karl Square | ካርል አደባባይ
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className='flex  m-8 w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-xl rounded-xl hover:scale-110 hover:bg-white duration-300'>
            <BiTimeFive className=' bg-Bilos-primary text-white text-4xl m-2 rounded-full border-0 p-2 ' />
            <div className='flex flex-col text-Bilos-third'>
              <h3 className='flex  text-2xl m-1 font-semibold text-Bilos-primary'>
                {' '}
                Open-Hours:{' '}
              </h3>
              <p className=' w-40 text-black text-font'>
                {' '}
                Monday-Saturday: 11:00 AM - 23:00 PM
              </p>
            </div>
          </div>

          <div className='flex   m-8 w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-xl rounded-xl hover:scale-110 hover:bg-white duration-300'>
            <HiOutlineMail className='  text-white text-4xl m-2 rounded-full border-0 p-2 bg-Bilos-primary ' />
            <div className='flex flex-col text-Bilos-third'>
              <h3 className='flex  text-2xl m-1 font-semibold text-Bilos-primary'>
                {' '}
                Email:{' '}
              </h3>
              <p className=' w-40 text-black text-font'>
                {' '}
                info@example.com contact@example.com
              </p>
            </div>
          </div>

          <div className='flex m-8 w-64 transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-xl rounded-xl hover:scale-110 hover:bg-white duration-300'>
            <BiPhoneCall className=' bg-Bilos-primary text-white  text-4xl m-2 rounded-full border-0 p-2  ' />
            <div className='flex flex-col text-Bilos-third'>
              <h3 className='flex  text-2xl font-semibold m-1 text-Bilos-primary'>
                {' '}
                Call:{' '}
              </h3>
              <p className=' w-32 text-black text-font'>
                {' '}
                +1 5589 55488 51 +1 5589 22475 14
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap  text-font h-[480px] '>
          <div className='block p-6 rounded-lg shadow-2xl   max-w-md'>
            <h1 className=' header-font  bg-white bg-opacity-30 rounded-md p-2 text-Bilos-primary m-6 text-center text-3xl '>
              Contact Form{' '}
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className='flex'>
                <div className='form-group mr-3 mb-6'>
                  <input
                    type='text'
                    className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    name='user_name'
                    placeholder='Name'
                    required
                  />
                </div>
                <div className='form-group mb-6'>
                  <input
                    type='email'
                    className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    name='user_email'
                    placeholder='Email address'
                    required
                  />
                </div>
              </div>
              <div className='form-group mb-6'>
                <input
                  type='text'
                  className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </div>

              <div className='form-group mb-6'>
                <textarea
                  className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                  name='message'
                  required
                  rows='5'
                  placeholder='Message'></textarea>
              </div>

              <button
                type='submit'
                value='Send'
                className='
      w-full
      px-6
      py-2.5
      bg-Bilos-primary
      text-white
      text-xs
      leading-tight
      uppercase
      font-bold
      rounded
      shadow-md 
      hover:bg-Bilos-secondary hover:shadow-lg
      focus:bg-Bilos-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-Bilos-primary active:shadow-lg
      transition
      duration-150
      ease-in-out'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
