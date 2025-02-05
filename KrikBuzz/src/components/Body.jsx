
import Header from './Header'
import { Outlet } from 'react-router-dom'




const Body = () => {
  return (
    <div className='bg-gray-300'>
      <Header/>
  <Outlet/>
    </div>
  )
}

export default Body
