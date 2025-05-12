import React from "react";

const Card = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="card bg-base-100 w-96 shadow-sm border">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <div className="card-actions justify-center">
            <p>$ 1200</p>
            <p>$ 1200</p>
            <button className="btn btn-xs btn-primary ">View Detlis</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
