import React,{ useState } from 'react';
import {CgMenu} from 'react-icons/cg'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
        if(!nav){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='scroll'
        }
    }

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
            <CgMenu onClick={handleNav} size={25} className='z-20 text-white cursor-pointer hover:text-gray-300'/>
            <div className={nav
                ?'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-4 flex-col z-10'
                :'absolute top-0 h-screen hidden eas'}>
                <ul className='flex flex-col fixed text-gray-300 left-0 top-0 w-full h-full justify-center items-center'>
                    <li className='font-bold text-3xl p-6 hover:bg-blue-600 w-full sm:text-2xl cursor-pointer '>Home</li>
                    <li className='font-bold text-3xl p-6 hover:bg-blue-600 w-full sm:text-2xl cursor-pointer '>Destiations</li>
                    <li className='font-bold text-3xl p-6 hover:bg-blue-600 w-full sm:text-2xl cursor-pointer '>Reservations</li>
                    <li className='font-bold text-3xl p-6 hover:bg-blue-600 w-full sm:text-2xl cursor-pointer '>Amenities</li>
                    <li className='font-bold text-3xl p-6 hover:bg-blue-600 w-full sm:text-2xl cursor-pointer '>Rooms</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;