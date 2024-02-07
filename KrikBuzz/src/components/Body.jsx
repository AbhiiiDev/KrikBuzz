
import Header from './Header'
import MatchContainer from '../containers/MatchContainer'
import NewsContainer from '../containers/NewsContainer'
import { Outlet } from 'react-router-dom'




const Body = () => {
  return (
    <div className='bg-gray-300'>
       <Header/>
       <Outlet/>
  {/* <MatchContainer/>
  <NewsContainer/> */}
    </div>
  )
}

export default Body
