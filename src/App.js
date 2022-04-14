import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Mealdb from './components/Mealdb/Mealdb';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Lunch from './components/Lunch/Lunch';
import WhyUs from './components/WhyUs/WhyUs';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Mealdb/>
      <Routes>
        <Route path='/breakfast' element={<Breakfast/>}/>
        <Route path='/lunch' element={<Lunch/>}/>
        <Route path='/dinner' element={<Dinner/>}/>
      </Routes>
      <WhyUs/>
    </div>
  );
}

export default App;
