import React, { useState } from 'react'
import Food from '../assets/Food.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { SiValorant } from "react-icons/si";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Home() {

  const [secureCode, setSecureCode] = useState('');
  const navigate = useNavigate();

  const handleAccessAppClick = () => {
    if (secureCode === '') {
      //alert('กรุณากรอกรหัสเข้าใช้งาน');
            Swal.fire({
        icon: 'Warning',
        iconColor: 'red',
        title: 'Insert Correct Password',
        showConfirmButton: 'true',
        showButtonColor: 'black'
    })
      return;
    }

    if (secureCode.toUpperCase() === 'SAU') {
      navigate('/showallkinkun');
    } else {
      //alert('รหัสเข้าใช้งานไม่ถูกต้อง');
                  Swal.fire({
        icon: 'Warning',
        iconColor: 'red',
        title: 'Insert Correct Password',
        showConfirmButton: 'true',
        showButtonColor: 'black'
    })
    }
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='w-10/12 mx-auto border-gray-300 p-4 shadow-md flex-grow'>
        <h1 className='text-2xl font-bold text-center text-blue-700'>
          Kinkun App (Supabase)
        </h1>
        <h1 className='text-2xl font-bold text-center text-blue-700'>
          บันทึกการกิน
        </h1>
        <img src={Food} alt="กินกัน" className='block mx-auto w-30 mt-5' />
        
        <input 
          type="text" 
          placeholder='Enter Secure Code'
          value={secureCode} 
          onChange={(e) => setSecureCode(e.target.value)}
          className='p-3 border border-gray-400 rounded-md mt-5 w-full'
        />

        <button 
          onClick={handleAccessAppClick}
          className='w-full bg-blue-700 p-3 rounded-md text-white mt-5'
        >
          Enter
        </button>

        <div className='mt-5 flex justify-center gap-6'>
          <a href=""><FaFacebook className='text-2xl text-blue-500 hover:text-red-700' /></a>
          <a href=""><FaXTwitter className='text-2xl hover:text-red-700' /></a>
          <a href=""><FaTwitch className='text-2xl text-purple-500 hover:text-red-700' /></a>
          <a href=""><FaSteam className='text-2xl hover:text-red-700' /></a>
          <a href=""><SiValorant className='text-2xl text-red-500 hover:text-red-700' /></a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

