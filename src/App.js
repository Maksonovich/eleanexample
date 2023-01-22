import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Contact from './pages/ContactsPage/Contact';
import Deliver from './pages/deliver/deliver';
import Home from './pages/Home/Home';
import Showroom from './pages/Showroom/Showroom';
import './sass/style.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/Deliver' element={<Deliver/>}/>
        <Route path='/ShowRoom' element={<Showroom/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
