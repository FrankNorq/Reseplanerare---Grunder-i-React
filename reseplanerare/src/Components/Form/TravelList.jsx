function TravelList({ travels }) {
    return (
        <ul>
            {travels.map((travel, index) => (
                <li key={index}>
                    {travel.activity} - {travel.destination} - {travel.date}
                </li>
            ))}
        </ul>
      );
}

export default TravelList;