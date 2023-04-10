import { BrowserRouter } from 'react-router-dom'
import { Route ,Routes  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LeaderBoard from './component/LeaderBoard/LeaderBoard'
import Home from './component/home/Home'
import Compiler from './component/compiler/Compiler'
import Practise from './component/practiseDsa/Practise'
import Contest from './component/Contest/Contest'
import Login from './component/LoginandSignup/login'
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home></Home>}/>
      <Route path='/practise' element= { <Practise></Practise>} />
      <Route path='/leaderBoard' element= {<LeaderBoard/>}/>
      <Route path='/contest' element= {<Contest></Contest>}/>
      <Route path='/compiler' element={<Compiler></Compiler>}/>
      <Route path='/login' element={<Login></Login>}/>
    </Routes>  
    </BrowserRouter>
    </>
  
  )
}

export default App
