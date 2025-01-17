
function CreateForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const plats = event.target.plats.value;
    const datum = event.target.datum.value;
    const aktivitet = event.target.aktivitet.value
    console.log({plats,datum,aktivitet});
    
  }
   

    return ( <form className="h" onSubmit={handleSubmit}>
        <h1>Välkommen till min sida</h1>
        <input type="text" name="plats" placeholder="ange plats" required />
        <input type="date" name="datum" placeholder="ange datum" required/>
        <input type="text" name="aktivitet" placeholder="ange aktivitet" required />
        <button type="submit">Click me</button>
    </form>

     );
}

export default CreateForm;