function DestinationForm({ destination, setDestination }) {
  return (
    <div>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Plats"
        required
      />
    </div>
  );
}

export default DestinationForm;
