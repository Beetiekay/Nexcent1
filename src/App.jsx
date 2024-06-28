import Client from "../components/Clients/Client"
import Footer from "../components/Footer/Footer"
import Home from "../components/Home/Home"
import Local from "../components/Local/Local"
import Login from "../components/Login/Login"
import Market from "../components/Market/Market"
import Navbar from "../components/Navbar/Navbar"
import Suspi from "../components/Suspi/Suspi"
import Vicon from "../components/Vicon/Vicon"
import How from "../components/how/how"


function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
    <Client/>
    <Login/>
    <Local/>
    <How/>
    <Vicon/>
    <Market/>
    <Suspi/>
    <Footer/>
    </>
  )
}

export default App
