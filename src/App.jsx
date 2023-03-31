import Canvas from "./canvas/index.jsx";
import { Customizer, Home } from "./pages/";
import { MainLayout } from "./components/templates/";

function App() {

    return (

        <MainLayout>
            <Home />
            <Customizer/>
        </MainLayout>


    )
}

export default App
