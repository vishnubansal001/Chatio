import React from 'react'
import image from "../img/bot_image.jpg";
import { useNavigate } from 'react-router-dom';
import {FiSend} from 'react-icons/fi';

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
    <div className="w-full max-w-[500px] py-[20px] px-[10px] min-[430px]:p-[30px] bg-white rounded-md shadow-md">
      <div className='max-w-[450px]'>
        <div className="flex items-center">
          <div>
            <img className='w-[60px] h-[60px] rounded-full object-cover' src={image} alt="" />
          </div>
          <div className="ml-3">
            <div onClick={() => navigate('/')} className="text-gray-700 font-bold text-lg select-none cursor-pointer hover:text-black">ChatIo</div>
            <div className="font-semibold text-gray-700 hover:text-green-500 select-none cursor-pointer">Active</div>
          </div>
        </div>
        <div className="mt-[30px] mx-0 mb-0">
          <div>
            <div className="flex">
              <div
                className="w-full p-[15] text-center bg-gray-400 rounded-sm mx-10 text-xl mt-0 mb-0"
                id="message1"
                
              ></div>
              <div
                className="w-full p-[15px] text-center bg-gray-700 text-white rounded-[10px] text-xl relative top-[120px] mb-[20px]"
                id="message2"
                
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-[120px] mx-0 mb-0">
          <div className="flex flex-row justify items-center">
            <div className='flex-1'>
              <textarea
                type="text"
                id="input"
                placeholder="Enter your message"
               className='w-full h-[58px] pl-[36px] outline-none border-none bg-gray-300 box-border rounded-[5px]'
              />
            </div>
            <div className="max-[380px]:ml-2 sm:ml-3">
              <button className='h-[50px] w-[50px] border-none outline-none rounded-[5px] bg-blue-700 text-white font-semibold cursor-pointer text-3xl flex justify-center items-center'>
                <FiSend/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
