import React from "react";
import { FaAngleRight } from "react-icons/fa";
import me from "../images/hero-kbg.jpeg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="ml-14 mr-14">
      <div >
        <h1 className="text-3xl font-bold text-left">About</h1>
        <h1 className="border w-16 border-2 border-teal-400"></h1>
      </div>

      <div className="my-5">
        <p className="text-left">
          I am Akash Biswas. I am developer and working with the path Mern stack dev
        </p>
      </div>


      <div className="lg:grid lg:grid-cols-2">
        <div className="flex justify-center mt-5">
          <img
            className="h-[350px] w-4/5 rounded-3xl lg:h-2/3"
            src={me}
            alt=""
          />
        </div>

        <div className="text-left mt-5 lg:w-full">
          <h1 className="text-3xl font-semibold">
            Full stack Web Developer.
          </h1>
          <h1 className="mt-1 border w-[400px] border-2 border-teal-400"></h1>

          <p className="mt-3 text-left">
        
        I am a MERN stack developer with a passion for creating web applications. I have experience in building full-stack web solutions using MongoDB, Express.js, React, and Node.js. My skills also include HTML, CSS, and JavaScript, along with various libraries and frameworks.
     
          </p>


{/* birthday session */}



          <div className="">
        <div className="mt-10 lg:mt-5 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Birthday :</span> 02 Jul 2000
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Website :</span> www.example.com
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Phone :</span> +880 1734174468
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">City :</span> Magura
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Age :</span> 24
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Degree :</span> B.tech in IT
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Email :</span> akashboswas2@gmail.com
          </Link>
        </div>
        <div className="mt-2 flex gap-2 text-left ">
          <Link className="mt-1">
            <FaAngleRight></FaAngleRight>
          </Link>
          <Link>
            <span className="font-bold">Freelance :</span> Available
          </Link>
        </div>
      </div>
        </div>
      </div>

   




      <div className="my-10">
        <div className="text-left ">
          <h1 className="text-3xl font-semibold mt-6">Skills</h1>
          <h1 className="border w-16 border-2 border-teal-400"></h1>
          <p className="mt-3">
          MERN Stack Development, React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, RESTful APIs, Database Design, Frontend Development, Backend Development, UI/UX Design'
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 text-left py-10">
           <div>
            <div className="flex justify-between mr-20">
            <p>HTML</p>
            <p>100%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="100" max="100"></progress>
       
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>MongoDb</p>
            <p>70%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="70" max="100"></progress>
       
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>React</p>
            <p>90%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="90" max="100"></progress>
       
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>JavaScript</p>
            <p>80%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="80" max="100"></progress>
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>c</p>
            <p>80%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="80" max="100"></progress>
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>c++</p>
            <p>80%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="80" max="100"></progress>
           </div>
           <div>
            <div className="flex justify-between mr-20">
            <p>Python</p>
            <p>70%</p>
            </div>
            <progress className="progress progress-info md:w-full" value="70" max="100"></progress>
           </div>


           <div>
            <div className="flex justify-between mr-20">
            <p>UI</p>
            <p>learning</p>
            </div>
            <progress className="progress md:w-full"></progress>
       
           </div>
          
           
          
       </div>






    </div>
  );
};

export default About;
