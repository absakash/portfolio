import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../path/Home";
import About from "../path/About";
import Resume from "../path/Resume";
import Contact from "../path/Contact";
import Portfolio from "../path/Portfolio";

const router=createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            children:[
                  {
                        path:'/home',
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
                        path:'/*',
                        element:<div>not found yet </div>
                  },

                 
            ]
      }
])

export default router