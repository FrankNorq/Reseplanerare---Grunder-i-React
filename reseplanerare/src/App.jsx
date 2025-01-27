import { useState, useEffect } from 'react';
import './App.css';
import TravelForm from './Components/Form/TravelForm';
import TravelList from './Components/Form/TravelList';


function App() {
  const [travels, setTravels] = useState([]);

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