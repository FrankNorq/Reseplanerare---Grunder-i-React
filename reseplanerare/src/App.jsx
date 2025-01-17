import { useState } from 'react'
import './App.css'
import CreateForm from './Components/Form/ActivityForm'
import HeaderComponent from './Components/Form/Layer/header'
import FooterComponent from './Components/Form/Layer/footer'


function App() {


  return (
    <>
<HeaderComponent></HeaderComponent>
<CreateForm></CreateForm>
<FooterComponent></FooterComponent>


    </>
  )
}

export default App
