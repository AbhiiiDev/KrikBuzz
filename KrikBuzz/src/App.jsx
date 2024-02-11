
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import LiveScore from './components/LiveScore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoveToTopButton from './components/MoveToTopButton'
import MatchContainer from './containers/MatchContainer'
import NewsContainer from './containers/NewsContainer'
import Commentary from './components/Commentary'
import Header from './components/Header'
import Scorecard from './components/Scorecard'

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
        element:<LiveScore/>,
        children:[
          {
            path:'commentary',
            element:<Commentary/>
          },
          {
            path:'scorecard',
            element:<Scorecard/>
          }
        ]
       
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
