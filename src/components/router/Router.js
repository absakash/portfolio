import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../path/Home";
import About from "../path/About";
import Resume from "../path/Resume";
import Contact from "../path/Contact";
import Portfolio from "../path/Portfolio";
import TailwindFeatures from "../path/TailwindFeatures";
import Frame from "../path/Frame";

const router=createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            children:[
                  {
                        path:'/',
                        element: <Home></Home>
                  },
                  {
                        path:'/about',
                        element: <About></About>
                  },
                  {
                        path:'/resume',
                        element: <Resume></Resume>
                  },
                  {
                        path:'/resume',
                        element:<Contact></Contact>
                  },
                  {
                        path:'/portfolio',
                        element:<Portfolio></Portfolio>
                  },
                  {
                        path:'/contact',
                        element:<Contact></Contact>
                  },
                  {
                        path:'/tailwind',
                        element:<TailwindFeatures></TailwindFeatures>
                  },
                  // {
                  //       path:'/frame',
                  //       element:<Frame></Frame>
                  // },
                  {
                        path:'/*',
                        element:<div>not found yet </div>
                  }

                 
            ]
      }
])

export default router