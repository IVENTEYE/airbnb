import Image from 'next/image';
import logo from '@/assets/logo.svg';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { useState } from 'react';
import Datepicker from './Datepicker';
import { useRouter } from 'next/router';

type HeaderProps = {
  placeholder?: string;
}

const Header: React.FC<HeaderProps> = ({ placeholder }) => {

    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

  return (
    <header className="header py-5 sticky top-0 z-50 bg-white shadow-md">
      <div className="header-container container grid grid-cols-3 px-3 md:px-10 items-center">
        <div 
          className="header__logo mr-[10px]"
          onClick={() => router.push('/')}
        >
            <Image src={logo} width={118} height={64} alt="Airbnb" className='cursor-pointer'/>
        </div>
        <div className="header__search md:shadow-sm relative flex-auto border-2 rounded-full flex">
          <input
            className="w-full text-sm text-gray-600 placeholder-gray-400 mr-[33px] h-full px-2 py-[10px] bg-transparent outline-none"
            placeholder={placeholder || "Отель в..."}
            type="text"
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value);
            }}
          />
          <button className="bg-[#FF385C] absolute right-1 top-[50%] translate-y-[-50%] hidden rounded-full p-2 cursor-pointer md:inline-flex">
            <AiOutlineSearch color="white" />
          </button>
        </div>
        <div className="header__settings flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline">Сдать жильё на Airbnb</p>
          <BsGlobe className="cursor-pointer w-[19px] h-[19px]" />
          <div className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer">
            <IoMdMenu className="w-[19px] h-[19px]" />
            <FaUserCircle className="w-[23px] h-[23px]" />
          </div>
        </div>
      </div>
      <Datepicker searchState={searchValue} setSearchState={setSearchValue}/>
    </header>
  );
};

export default Header;
