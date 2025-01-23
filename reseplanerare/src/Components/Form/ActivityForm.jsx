
function CreateForm({ title }) {
    // här hanteras inputs 
    const handleSubmit = (event) => {
      event.preventDefault();
      const plats = event.target.plats.value;
      const datum = event.target.datum.value;
      const aktivitet = event.target.aktivitet.value
      console.log({plats,datum,aktivitet});
      
      
    }
    //  detta är min form som jag skapar med CreateForm 
      return ( <form className="h" onSubmit={handleSubmit}>
          <h4>{title} </h4>
          <input type="text"  name="plats" placeholder="ange plats" required />
          <input type="date" name="datum" placeholder="ange datum" required/>
          <input type="text" name="aktivitet" placeholder="ange aktivitet" required />
          <button type="submit">Spara aktivitet</button>
      </form>
  
       );
  }
  
  export default CreateForm;