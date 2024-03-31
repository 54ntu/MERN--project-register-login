import './App.css'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Indexpage from './components/indexpage'
import Register from './components/register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    {/* <Register/> */}
    <Router>
      <Routes>
        <Route exact path='/' Component={Homepage}/>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/index' Component={Indexpage}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
