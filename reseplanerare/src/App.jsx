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
import ActivityPage from './Components/pages/ActivityPage';

// Layouts
import RootLayout from './Components/Routing/RootLayout';
const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
  <Route index element={<Home/>} />
<Route path='/addActivity' element={<ActivityPage/>}/>
</Route>
))

function App() {
 
  return  <RouterProvider router={router}/>

}

export default App;
