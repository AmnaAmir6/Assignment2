import './App.css'
import Navbar from './components/NavBar'
import SideBar from './components/SildeBar'

function App() {

  return (
    <>
    <div className="wrapper">
      <SideBar />
      <div className="main">
        <Navbar />
        <div className="container-fluid p-0">
        </div>
      </div>
    </div>
    </>
  )
}

export default App
