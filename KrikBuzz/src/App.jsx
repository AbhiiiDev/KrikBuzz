
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import LiveScore from './components/LiveScore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoveToTopButton from './components/MoveToTopButton'
import MatchContainer from './containers/MatchContainer'
import NewsContainer from './containers/NewsContainer'
import Commentary from './components/Commentary'
import Scorecard from './components/Scorecard'
import LiveList from './components/LiveList'
import '@mantine/core/styles.css';
import  {MantineProvider} from '@mantine/core'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient=new QueryClient();
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
      path:"livescores",
      element:<LiveList/>
     },
      {
        path:"livescore",
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
    <QueryClientProvider client={queryClient}>

  <MantineProvider>
 <div className='mx-auto  mt-3 w-[80%]'>

  <RouterProvider router={appRouter}/>
 </div>
 <Footer/>
 <MoveToTopButton/>
  </MantineProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
