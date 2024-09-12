
import ErrorBoundary from '../components/ErrorBoundary'
import Navbar from '../components/NavBar'
import UserDetail from '../components/UserDetail'
import './App.css'

function App() {


  return (
    <>
    <Navbar/>

      <ErrorBoundary><UserDetail /></ErrorBoundary>
    </>
  )
}

export default App
