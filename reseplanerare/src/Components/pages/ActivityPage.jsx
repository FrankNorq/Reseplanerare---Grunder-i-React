import useLocalStorage from "../useLocalStorage";
import TravelForm from "../Form/TravelForm";
import TravelList from "../Form/TravelList";

function ActivityPage() {
  const [travels, setTravels] = useLocalStorage("travels", []);

  const addTravel = (travel) => {
    setTravels([...travels, travel]);
  };
  return (
    <div className="ActivityPage">
      <TravelForm addTravel={addTravel}></TravelForm>
      <TravelList travels={travels}></TravelList>
    </div>
  );
}

export default ActivityPage;
