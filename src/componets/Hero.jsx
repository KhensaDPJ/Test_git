import React from 'react';

const Hero = () => {
    return (
        <div className='w-full h-screen '>
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="" />
            <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] mx-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-10xl '>Private Beaches & Getaway</h1>
                <p className='mx-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sed maxime dolore nesciunt voluptas inventore nam libero porro! Repellat quisquam quod perspiciatis! Corporis, quasi veniam consequuntur provident consectetur reiciendis consequatur.</p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
        </div>
    );
};

export default Hero;