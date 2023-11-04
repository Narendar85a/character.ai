import './App.css';
import TopBar from './component/navbar/TopBar';
import SideBar from './component/sidebar/SideBar';
import HomePage from './component/sidebar/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './component/sidebar/create/Create'
import Crud from './component/sidebar/crud/Crud'

function App() {
  return (
    <BrowserRouter>
      <div className='app-top'>
      <TopBar/>
      </div>
      <div className='app2'>
        <div className='app-side' >
       <SideBar/>
        </div>
        <div className='app-content'>
        <Routes>
      
        <Route  path='/' element={<HomePage />}  />
        <Route  path='/create' element={<Create/>}  />
        <Route  path='/crud operation' element={<Crud/>}  />
        {/* <Route  path='' element={}  /> */}
        
      </Routes>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
