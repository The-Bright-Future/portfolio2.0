import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../component/About/About/About';
import Abot from '../../component/About/About/About';
import Contact from '../../component/Contact/Contact/Contact';
import HeadSection from '../../component/HeadSection/HeadSection/HeadSection';
import JoinUs from '../../component/JoinUs/JoinUs/JoinUs';
import NotFound from '../../component/NotFound/NotFound';
import Review from '../../component/Review/Review/Review';
import Service from '../../component/Service/Service/Service';
import Technology from '../../component/Technology/Techonology/Technology';
import Home from '../../pages/Home/Home';
import Main from '../../pages/Main/Main';
import Project from '../../component/Project/Project/Project';
import Card from '../../component/Project/Cards/Cards';
import AllProject from '../../component/Project/AllProject/AllProject';
import ProjectDetails from '../../component/Project/ProjectDetails/ProjectDetails';

export const route = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children : [
            {
               path : "/",
               element : <Home />
            },
            {
               path : "/about",
               element : <About />
            },
            {
               path : "/service",
               element : <Service />
            },
            {
               path : "/technology",
               element : <Technology />
            },
            {
               path : "/review",
               element : <Review />
            },
            {
               path : "/joinUs",
               element : <JoinUs />
            },
            {
               path : "/project",
               element : <Project />
            },
            {
               path : "/project/:id",
               element : <ProjectDetails />
            },
            {
               path : "/all_project",
               element : <AllProject />,
               loader : async ()=>{
                  return fetch('http://localhost:8000/allProject')
               }
            },
            {
               path : "/all_project/:id",
               element : <ProjectDetails />
            },
            {
               path : "/Cart",
               element : <Card />
            },
            {
               path : "/contact",
               element : <Contact />
            }
             
        ] 
    },
    {
        path : '*',
        element : <NotFound />
    }
])