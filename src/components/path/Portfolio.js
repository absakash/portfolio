import React from "react";
import { Link } from "react-router-dom";
import calulator from '../images/calculator.jpeg'
import car from '../images/car.jpeg'
import shoping from '../images/shoping.jpeg'
import parlout from '../images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Portfolio = () => {
  return (
    <div>
      <div className=" font-serif text-3xl ">
        My created sites you can visit
      </div>

      {/* <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 p-4 ">
       
        <div className="card bg-base-100 shadow-xl sm:p-5">
          <figure className="px-5 pt-5">
            <img
              src={calulator}
              alt="Shoes"
              className="rounded-xl w-full"
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
              src={parlout}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Parlour </h2>
            <p>We will service the material of beauty </p>
            <div className="card-actions">
              <Link target="blank" to='https://frabjous-torrone-ea9131.netlify.app/' className="btn btn-primary">Jern's parlour</Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
      {/* Card 1: Calculator */}
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={calulator} alt="Calculator" className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Calculator</h2>
          <p>A simple Calculator </p>
          <Link
            className="btn btn-primary w-full"
            target="_blank"
            to="https://chic-sherbet-8bcf9c.netlify.app/"
          >
            Calculator
          </Link>
        </div>
      </div>

      {/* Card 2: Car Doctor */}
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={car} alt="Car Doctor" className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Car Doctor</h2>
          <p>Solve your car issues</p>
          <Link
            className="btn btn-primary w-full"
            target="_blank"
            to="https://prismatic-kringle-893d96.netlify.app/"
          >
            Car Doctor
          </Link>
        </div>
      </div>

      {/* Card 3: Emazone */}
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={shoping} alt="Emazone" className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Emazone</h2>
          <p>Simple Emazone project</p>
          <Link
            className="btn btn-primary w-full"
            target="_blank"
            to="https://frabjous-kringle-c1134c.netlify.app/"
          >
            Emazone
          </Link>
        </div>
      </div>

      {/* Card 4: Parlour */}
      <div className="card bg-base-100 shadow-xl p-5">
        <figure className="px-5 pt-5">
          <img src={parlout} alt="Parlour" className="rounded-xl w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Parlour</h2>
          <p>We will service the beauty materials</p>
          <div className="card-actions">
            <Link
              target="_blank"
              to="https://frabjous-torrone-ea9131.netlify.app/"
              className="btn btn-primary w-full"
            >
              Jern's Parlour
            </Link>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Portfolio;
