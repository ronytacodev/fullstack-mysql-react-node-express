import logo from './logo.svg';
import './App.css';

// importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompCreateBlog from './blog/CreateBlogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs/>}/>
          <Route path='/create' element={ <CompCreateBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
