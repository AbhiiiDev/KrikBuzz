
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import LiveScore from './components/LiveScore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoveToTopButton from './components/MoveToTopButton'
import MatchContainer from './containers/MatchContainer'
import NewsContainer from './containers/NewsContainer'

function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<>
        <MatchContainer/>
        <NewsContainer/>
        </>
      }
     ,
      {
        path:"/livescore",
        element:<LiveScore/>
      }
      ,
    ]
  
  }],
)

  return (
    <>
 <div className='mx-10 mt-2 '>
  <RouterProvider router={appRouter}/>
 
 </div>
 <Footer/>
 <MoveToTopButton/>
    </>
  )
}

export default App
