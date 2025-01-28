import { useState, useEffect } from 'react';
import useLocalStorage from './Components/useLocalStorage';
import './App.css';
import TravelForm from './Components/Form/TravelForm';
import TravelList from './Components/Form/TravelList';


function App() {
  const [travels, setTravels] = useLocalStorage("travels", []);

  const addTravel = (travel) => {
      setTravels([...travels, travel]);
  };
return (
  <div className="app">
     <h1>Reseplaneraren</h1>
<TravelForm addTravel = {addTravel}></TravelForm>
<TravelList travels = {travels}></TravelList>
</div>
)
}

export default App;