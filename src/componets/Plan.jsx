import React from "react";
const Plan=()=>{
    return(
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
            <div className="grid grid-cols-2 grid-rows-6 gap-4">
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="Not Load Image" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="Not Load Image" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="Not Load Image" />
                <img className="row-span-3 object-cover w-full h-full p-2" src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="Not Load Image" />
                <img className="row-span-2 object-cover w-full h-full p-2" src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg" alt="Not Load Image" />
            </div>
            <div className="flex flex-col h-full justify-center">
                <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
                <p className="text-2xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis velit eos alias libero, consectetur quibusdam eligendi quisquam tenetur explicabo reprehenderit aspernatur neque quidem excepturi debitis in ducimus, nulla iste?</p>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quos earum dolores quia praesentium deleniti accusamus neque rerum similique voluptatum, nobis unde dignissimos distinctio. Placeat fugit, ipsam ab recusandae, nihil voluptate, voluptas corrupti ad numquam maxime autem perspiciatis iusto debitis.</p>
                
            <div>
                <button className="border-black mr-4 hover:shadow-xl">Leanr More</button>
                <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
            </div>
            </div>
        </div>
    );
}
export default Plan;