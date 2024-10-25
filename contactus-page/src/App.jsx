import {FormContextProvider} from "./context/FormContext"
import Display from "./components/Display/Display"
import Container from "./components/Container/Container"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
export default function App(){
    return(
        <FormContextProvider>
        <div className = "app">
            <Navbar/>
        <Container>
            <Hero/>
            <Display/>
        </Container>
        </div>
        </FormContextProvider>
    );

}
