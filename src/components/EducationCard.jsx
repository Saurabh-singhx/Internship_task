import React, { useState, useRef, useEffect } from 'react';
import background from '../assets/bg-2.svg';
import menu from '../assets/menu.png';
import pf1 from '../assets/pf-1.png';
import eye from '../assets/eye.svg';
import share from '../assets/share-24px.png';

function EducationCard() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='flex flex-col w-full gap-2 border-[#E0E0E0] border-[1px] rounded-[4px] mt-5 lg:h-[472px] h-auto justify-between relative'>
      {/* Image */}
      <div className='h-[45%]'>
        <img src={background} alt="Background" className='h-48 w-full object-cover' />
      </div>

      {/* Type */}
      <div className='px-4'>
        <span className='text-[18px] font-medium'>📝 Education</span>
      </div>

      {/* Title + Menu */}
      <div className='px-4 w-full flex items-center gap-2 relative'>
        <span className='text-[22px] font-medium'>What if famous brands had regular fonts? Meet RegulaBrands!</span>
        <div className='ml-auto relative' ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <img src={menu} alt="Menu" />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-8 bg-white border rounded shadow-md z-10 w-40">
              <ul className="text-sm text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className='px-4'>
        <p className='text-[#5C5C5C] text-[19px] font-normal'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
      </div>

      {/* Footer: Author + Views + Share */}
      <div className='flex items-center justify-between px-4 mb-4'>
        <div className='flex items-center gap-2'>
          <img src={pf1} alt="Profile" />
          <span className='text-[18px] font-semibold'>Sarthak Kamra</span>
        </div>

        <div className='flex items-center gap-2 w-[40%] justify-end'>
          <img src={eye} alt="Views" />
          <span className='text-[#525252] text-[14px] font-medium'>1.4k Views</span>
          <button className='ml-[10%]'>
            <img src={share} alt="Share" className='p-1 bg-[#EDEEF0]' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
