// Imports 
import { 
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
   } from 'react-router-dom';
import React from "react";
import "./App.css";
// Pages
import Home from './Components/pages/homepage';
// import DestinatinoDetails from './Components/pages/DestinationDetails';
import ActivityPage from './Components/pages/ActivityPage';
import AboutPage from './Components/pages/AboutPage';
import FaqPage from './Components/pages/FAQPage';
import ContactPage from './Components/pages/ContactPage';

// Layouts
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/HelpLayout';



//Kod
const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
  <Route index element={<Home/>} />
<Route path='/addActivity' element={<ActivityPage/>}/>
<Route path='/about' element={<AboutPage/>} />
<Route path='/help' element={<HelpLayout/>}/>
<Route path='faq' element={<FaqPage/>} />
<Route path='contact' element={<ContactPage/>} />
</Route>
))

function App() {
 
  return  <RouterProvider router={router}/>

}

export default App;
