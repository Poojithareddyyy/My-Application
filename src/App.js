import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import GetPosts from './GetPosts';
import SendPosts from './SendPosts';
import ModifyPosts from './ModifyPosts';
import DeletePosts from './DeletePosts';
import SearchPosts from './SearchPosts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={GetPosts}/>
        <Route path='/search' Component={SearchPosts}/>
        <Route path='/create' Component={SendPosts}/>
        <Route path='/update' Component={ModifyPosts}/>
        <Route path='/delete' Component={DeletePosts}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
