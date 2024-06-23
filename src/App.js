import Navbar from './component/navbar/index';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './assests/style/index.css';
// import '../../assests/images/download.png';
import {Home} from './pages/home/index';
import {Learn} from './pages/learn/index';
import {Reference} from './pages/reference/index';
import {Community} from './pages/community/index';
import {Blog} from './pages/blog/index';
import Footer from './component/fotter/index';
// import { Video } from './pages/vedio1 page';



function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/'element={<Home/>}></Route>
      <Route path='/learn'element={<Learn/>}></Route>
      <Route path='/reference'element={<Reference/>}></Route>
      <Route path='/community'element={<Community/>}></Route>
      <Route path='/blog'element={<Blog/>}></Route>
      {/* <Route path='/video'element={<Video/>}></Route> */}

  
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
  );
}

export default App;
