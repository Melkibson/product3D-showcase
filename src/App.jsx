import Canvas from "./canvas/index.jsx";
import { Customizer, Home } from "./pages/";
import { Main } from "./components/templates/";

function App() {

  return (
    <Main>
        <Home />
        <Customizer />
    </Main>
  )
}

export default App
