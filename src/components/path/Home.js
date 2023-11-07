import React, { useEffect, useState } from "react";
import Typer from "react-text-typist";
import Typist from 'react-text-typist';
import img from '../images/c2d5051c-fe8b-44e4-9fd7-bbdac67ee494.jpeg'
const Home = () => {
  const items = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const typeText = () => {
      const item = items[currentItemIndex];
      let index = 0;
      const interval = setInterval(() => {
        setText(item.slice(0, index));
        index++;
        if (index > item.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentItemIndex((currentItemIndex + 1) % items.length);
          }, 2000); // Wait 2 seconds before typing the next item
        }
      }, 100); // Typing speed (milliseconds)
    };

    typeText();
  }, [currentItemIndex]);

  return (
   <div>
    <div className="relative">
    <div>
      <img className=" opacity-70" src={img} alt="" />
    <div>
      b
    </div>
      <div className="text-4xl font-bold p-2 text-black font-serif">
     

       <div>
       <p>I'm a</p>
      <p className="top-1/2 absolute">
       <span className="typed">{text}</span>
      </p>
       </div>
      
      </div>
    </div>
    </div>
   </div>
  );
};

export default Home;
