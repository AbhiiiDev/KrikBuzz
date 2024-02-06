
import Header from './Header'
import MatchContainer from '../containers/MatchContainer'
import NewsContainer from '../containers/NewsContainer'




const Body = () => {
  return (
    <div className='bg-gray-300'>
       <Header/>
  <MatchContainer/>
  <NewsContainer/>
    </div>
  )
}

export default Body
