import React, { useState } from 'react'
import Food from '../assets/Food.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Showallkinkun() {
  
  const[kinkuns, setKinkuns] = useState([]);

useEffect(() => {
    const fetchKinkuns = async () => {
      try {
        const { data, error } = await supabase
          .from('kinkun_tb')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.log('Fetch error:', error);
          alert('เกิดข้อผิดพลาดในการดึงข้อมูลการกิน ลองใหม่อีกครั้ง');
          return;
        }

        setKinkuns(data);
      } catch (err) {
        console.log('Unexpected error:', err);
        alert('ระบบสะดุด ลองใหม่อีกครั้ง');
      }
    };

    fetchKinkuns();
  }, []);
  return (
    <div>
      <div className='min-h-screen flex flex-col'>
          <div className='w-10/12 mx-auto border-gray-300 p-4 shadow-md'>
              <h1 className='text-2xl font-bold text-center text-blue-700'>
                Kinkun App (Supabase)
              </h1>
              <h1 className='text-2xl font-bold text-center text-blue-700'>
                บันทึกการกิน
              </h1>
              <img src={Food} alt="กินกัน" className='block mx-auto w-30 mt-5' />

              <div className='mt-8 flex justify-end'>
                <Link to='/Addkinkun' className='bg-blue-700 p-3 rounded hover:bg-blue-800 text-white'>เพิ่มการกิน
                </Link>
              </div>
              <table className='w-full border border-gray-700 text-sm'>
                <thead>
                  <tr className='bg-gray-400'>
                    <th className='border border-gray-700'>รูป</th>
                    <th className='border border-gray-700'>กินอะไร</th>
                    <th className='border border-gray-700'>กินที่ไหน</th>
                    <th className='border border-gray-700'>กินเท่าไร</th>
                    <th className='border border-gray-700'>วันไหน</th>
                    <th className='border border-gray-700'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {kinkuns.map((kinkun)=>(
                      <tr key= {kinkun.id }>
                        <td className='border border-gray-700 p-2'>{
                          kinkun.food_img_url == '' || kinkun.food_img_url == null
                          ? '-' : <img src={kinkun.food_img_url} alt='รูปอาหาร' className='w-20 mx-auto' />
                          }</td>
                        <td className='border border-gray-700 p-2'>{kinkun.food_name}</td>
                        <td className='border border-gray-700 p-2'>{kinkun.food_where}</td>
                        <td className='border border-gray-700 p-2'>{kinkun.food_pay}</td>
                        <td className='border border-gray-700 p-2'>
                          {new Date(kinkun.created_at).toLocaleDateString('th-TH')}
                        </td>
                        <td className='border border-gray-700 p-2'>
                          เเก้ไข | ลบ
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
    </div>
    <Footer />
  </div>
  </div>
  )
}
