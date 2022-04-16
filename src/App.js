import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}>
          <Route path='breakfast' element={<Breakfast />} />
          <Route path='lunch' element={<Lunch />} />
          <Route path='dinner' element={<Dinner />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
