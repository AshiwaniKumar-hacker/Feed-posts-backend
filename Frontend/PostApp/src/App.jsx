 import React from 'react'
 import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './Pages/CreatePost.jsx'
import './index.css'
import Feed from './Pages/Feed.jsx'
 
 const App = () => {
   return (
     <div>
      <Router>
        <Routes>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/feed' element={<Feed/>}></Route>
        </Routes>
      </Router>
       
     </div>
   )
 }
 
 export default App
 