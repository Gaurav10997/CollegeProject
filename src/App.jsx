import { BrowserRouter } from 'react-router-dom'
import { Route ,Routes  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LeaderBoard from './component/LeaderBoard/LeaderBoard'
import Home from './component/home/Home'
import Practise from './component/practiseDsa/Practise'
import Contest from './component/Contest/Contest'
import Solve  from './component/Solvation/Solve'
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
      <Route path='/solve' element= {<Solve></Solve>}/>
      
    </Routes>  
    </BrowserRouter>
    </>
  
  )
}

export default App
