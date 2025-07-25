import background from '../assets/Rectangle 2.png';
import dropdown from '../assets/drop-down.svg';
import addmore from '../assets/Vector.png';
import location from '../assets/location.png';
import sign from '../assets/vector-6.png';
import like from '../assets/like.png';
import profile from '../assets/pf-1.png';
import { useState } from 'react';
import Article from '../components/Article';
import EducationCard from '../components/EducationCard';

function HomePage() {
  const [selected, setSelected] = useState('All Post');
  const options = ['All Post', 'Article', 'Event', 'Education', 'Job'];

  return (
    <div className="w-full flex flex-col">
      <div>
        <img
          src={background}
          alt="Homepage background"
          className="w-full lg:h-[24rem] object-center sm:[h-20rem] md:h-[22rem] h-[18rem] object-fill lg:object-cover md:object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Tabs and buttons (visible only on md & lg) */}
      <div className='items-center justify-between h-[60px] lg:mx-[14%] mx-[5%] border-b hidden lg:flex md:flex'>
        <div className="flex items-center h-full justify-start w-[50%] gap-4">
          {options.map((label) => (
            <button
              key={label}
              onClick={() => setSelected(label)}
              className={`h-full font-ibm font-normal text-[16px] leading-[100%] tracking-[0] text-[#8A8A8A] border-b-2 transition-colors ${selected === label ? 'border-black text-black' : 'border-transparent'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className='flex items-center w-[50%] justify-end '>
          <button className='flex items-center justify-between bg-[#EDEEF0] w-[133px] h-[36px] p-2 rounded-[4px]'>
            <span className='font-ibm font-medium text-[15px] leading-[100%] tracking-[0]'>
              Write a Post
            </span>
            <img src={dropdown} alt="" />
          </button>
          <button className='flex items-center bg-[#2F6CE5] w-[125px] h-[36px] justify-center p-2 rounded-[4px] gap-2 ml-4'>
            <img src={addmore} alt="" />
            <span className='text-white font-ibm font-medium text-[15px] leading-[100%] tracking-[0]'>Join Group</span>
          </button>
        </div>
      </div>

      {/* post card */}
      <div className='flex'>
        <div className='lg:mx-[14%] md:mx-[10%] lg:w-[48%] w-full p-2 relative'>

          {/* Top post meta info */}
          <div className="flex justify-between items-center mb-2 px-2 lg:hidden md:hidden">
            <span className="font-ibm font-semibold text-base">Posts(4)</span>
            <span className="font-ibm text-sm text-gray-600 flex p-2 bg-[#F1F3F5]">Filter: All
              <img src={dropdown} alt="" />
            </span>
          </div>

          <Article />
          <EducationCard />
        </div>

        <div className='w-[243px] mr-10 hidden lg:flex md:flex flex-col gap-4 mt-10'>
          <div className='flex items-center gap-2 border-b-2 py-4'>
            <img src={location} alt="" className='w-[18px] h-[18px]' />
            <span className='font-ibm font-normal text-[14px] leading-[100%] tracking-[0] text-[#5C5C5C]'>|Enter your location</span>
          </div>

          <div className='flex items-center gap-2 w-[243px] mt-5 h-[32px]'>
            <img src={sign} alt="" className='mb-auto mt-2 ' />
            <span className='font-ibm font-normal text-[12px] leading-[130%] tracking-[0] text-[#5C5C5C]'>Your location will help us serve better and extend a personalised experience.</span>
          </div>

          <div className='w-[243px] flex gap-2 mt-5'>
            <img src={like} alt="" />
            <span className='font-ibm font-normal text-[14px] leading-[130%] tracking-[10%] '>RECOMMENDED GROUP</span>
          </div>

          <div className='w-[243px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={profile} alt="" />
              <span>Leisure</span>
            </div>
            <div>
              <button className='px-4 py-2 rounded-full bg-[#EDEEF0] font-ibm font-normal text-[12px] leading-[100%] tracking-[0]'>Follow</button>
            </div>
          </div>
          <div className='w-[243px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={profile} alt="" />
              <span>Leisure</span>
            </div>
            <div>
              <button className='px-4 py-2 rounded-full bg-[#EDEEF0] font-ibm font-normal text-[12px] leading-[100%] tracking-[0]'>Follow</button>
            </div>
          </div>
          <div className='w-[243px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={profile} alt="" />
              <span>Leisure</span>
            </div>
            <div>
              <button className='px-4 py-2 rounded-full bg-[#EDEEF0] font-ibm font-normal text-[12px] leading-[100%] tracking-[0]'>Follow</button>
            </div>
          </div>
          <div className='w-[243px] flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src={profile} alt="" />
              <span>Leisure</span>
            </div>
            <div>
              <button className='px-4 py-2 rounded-full bg-[#EDEEF0] font-ibm font-normal text-[12px] leading-[100%] tracking-[0]'>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
