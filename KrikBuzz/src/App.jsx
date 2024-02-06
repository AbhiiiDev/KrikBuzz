
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import LiveScore from './components/LiveScore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoveToTopButton from './components/MoveToTopButton'

function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
  
  },
  {
    path:"/liveScore",
    element:<LiveScore/>
   }],
)

  return (
    <>
 <div className='mx-10 mt-2 '>
  <RouterProvider router={appRouter}/>
  {/* <Header/>
  <MatchContainer/>
  <NewsContainer/> */}
 
 </div>
 <Footer/>
 <MoveToTopButton/>
    </>
  )
}

export default App
