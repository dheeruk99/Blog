import { Routes, BrowserRouter ,Route } from 'react-router-dom';
import{Navbar, Home, CreatePost, PostDetails} from './';

function App() {
  return (
    <div className='Container'>
          
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route exact path='/' element = {<Home/>}/>
              <Route exact path='/create-post' element={<CreatePost/>}/>
              <Route exact path='/post/:postId' element={<PostDetails/>}/>
            </Routes>
        </BrowserRouter>
    
    </div>

  )
}

export default App;
