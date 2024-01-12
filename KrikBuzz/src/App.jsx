
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import MatchContainer from './containers/MatchContainer'
import NewsContainer from './containers/NewsContainer'

function App() {


  return (
    <>
 <div className='mx-10 mt-2 bg-gray-300 '>
  <Header/>
  <SubHeader/>
  <MatchContainer/>
  <NewsContainer/>
 </div>
     
    </>
  )
}

export default App
