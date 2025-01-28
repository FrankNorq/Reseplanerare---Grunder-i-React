import { useState, useEffect } from "react";
import ActivityForm from "./ActivityForm";
import DestinationForm from "./DestinationForm";
import DateForm from "./DateForm";

function TravelForm({ addTravel }) {
  const [activity, setActivity] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addTravel({ activity, destination, date });
    setActivity("");
    setDestination("");
    setDate("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <ActivityForm activity={activity} setActivity={setActivity} />
      <DestinationForm
        deistination={destination}
        setDestination={setDestination}
      />
      <DateForm date={date} setDate={setDate} />
      <button type="submit">Spara aktivitet</button>
    </form>
  );
}

export default TravelForm;
