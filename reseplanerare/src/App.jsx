import { useState } from 'react'
import './App.css'
import CreateForm from './Components/Form/ActivityForm'
import HeaderComponent from './Components/Form/Layout/header'
import FooterComponent from './Components/Form/Layout/footer'


function App() {
  const [newState,setState] = useState()
  return (
    <>
    {/* här importerar jag mina olika komponenter till main  */}
<HeaderComponent></HeaderComponent>
<CreateForm title="UnderRubrik med props"></CreateForm>
<FooterComponent></FooterComponent>


    </>
  )
}

export default App
