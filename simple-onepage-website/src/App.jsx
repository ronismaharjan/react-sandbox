import Container from "./components/Container/Container"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
export default function App(){
    return(
        <>
        <Navbar/>
        <Container>
        <Hero/>
        </Container>
        </>
    );
}
