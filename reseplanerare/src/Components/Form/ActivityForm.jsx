import FormActivity from "./FormActivity";
import FormDate from "./FormDate";
import FormPlace from "./FormPlace";
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
       <FormActivity></FormActivity>
       <FormDate></FormDate>
       <FormPlace></FormPlace>
       <button>Spara aktivitet</button>
      </form>
  
       );
  }
  
  export default CreateForm;