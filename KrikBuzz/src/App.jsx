
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
import LiveScores from './components/LiveScore'
import LiveList from './components/LiveList'

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
      path:"/livescores",
      element:<LiveList/>
     },
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
 <div className=' ml-24 justify-center mt-3 w-[1000px]'>
  <RouterProvider router={appRouter}/>
 </div>
 <Footer/>
 <MoveToTopButton/>
    </>
  )
}

export default App
