import React from "react";
const Room = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold ">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          consequatur excepturi dolorum accusamus repellat, possimus dolore
          facere quo, sequi assumenda mollitia adipisci modi corrupti eaque
          inventore. Debitis veritatis quo sint.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full"
          src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
          alt="No connect Image"
        />
        <img className="row-span-2 object-cover w-full h-full"
          src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
          alt="No connect Image"
        />
        <img className="object-cover w-full h-full"
          src="https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg"
          alt="No connect Image"
        />
      </div>
    </div>
  );
};
export default Room;
