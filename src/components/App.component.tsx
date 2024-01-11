import MainLayout from "../layouts/main.layout";

import RootPortada from "../pages/portada.pages";
import RootPresentacion from "../pages/presentacion.pages";
import RootExperiencia from "../pages/experiencia.pages";
import RootTrabajos from "../pages/trabajos.pages";
import RootContacto from "../pages/contacto.pages";
import RootFormación from "../pages/formacion.pages";

import '../styles/app.sass'

const App = () => {

  return(
    <MainLayout>
      <RootPortada/>
      <RootPresentacion/>
      <RootTrabajos/>
      <RootExperiencia/>
      <RootFormación/>
      <RootContacto/>
    </MainLayout>
  )

}
  
export default App