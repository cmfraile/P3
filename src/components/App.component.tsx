import MainLayout from "../layouts/main.layout";

import RootPortada from "../pages/portada.pages";
import RootPresentacion from "../pages/presentacion.pages";
import RootExperiencia from "../pages/experiencia.pages";
import RootTrabajos from "../pages/trabajos.pages";
import RootContacto from "../pages/contacto.pages";

import '../styles/app.sass'
import { useContext } from "react";
import { mainContext } from "../context/main.context";

const App = () => {

  return(
    <MainLayout>
      <RootPortada/>
      <RootPresentacion/>
      <RootExperiencia/>
      <RootTrabajos/>
      <RootContacto/>
    </MainLayout>
  )

}
  
export default App