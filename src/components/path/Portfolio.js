import React from "react";
import { Link } from "react-router-dom";
import calulator from '../images/calculator.jpeg'
import car from '../images/car.jpeg'
import shoping from '../images/shoping.jpeg'
const Portfolio = () => {
  return (
    <div>
      <div className=" font-serif text-3xl ">
        My created sites you can visit
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-3">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src={calulator}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Calculator</h2>
            <p>A simple Calculator </p>
          
            <Link className="btn btn-primary w-full" target='blank' to='https://chic-sherbet-8bcf9c.netlify.app/'>
                          Calculator
                          </Link>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src={car}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car!</h2>
            <p>Solve your issues</p>
            
            <Link className="btn btn-primary w-full" target='blank' to='https://prismatic-kringle-893d96.netlify.app/'>
                          Car doctor
                          </Link>
           
          </div>
        </div>
        <div className="card w-82 bg-base-100 shadow-xl">
          <figure className="px-5 pt-5 w-full ">
            <img
              src={shoping}
              alt="Shoes"
              className="rounded-xl w-full h-[450pxx]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Emazone!</h2>
            <p>Simple Emazone projects </p>
            <Link className="btn btn-primary w-full" target='blank' to='https://frabjous-kringle-c1134c.netlify.app/'>
                          Emazone
                          </Link>
          </div>
        </div>
        <div className="card w-82 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Portfolio;
