import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './pages/Landing'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import CardSignIn from './components/CardSignIn';
import CardSignUp from './components/CardSignUp';
import Home from './pages/Home';
import SubscribePage from './pages/SubscribePage';
import ProfilePage from './pages/ProfilePage';
import DetailPage from './pages/DetailPage';
import AdminBook from './pages/AdminBook';
import AdminPage from './pages/AdminPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/signin" element={<CardSignIn/>}/>
        <Route exact path="/signup" element={<CardSignUp/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/subscribe" element={<SubscribePage/>}/>
        <Route exact path="/profile" element={<ProfilePage/>}/>
        <Route exact path="/detailBook" element={<DetailPage/>}/>
        <Route exact path="/adminHome" element={<AdminPage/>}/>
        <Route exact path="/adminAdd" element={<AdminBook/>}/>

        {/* <Route exact path="/" element= {}>
          <Route exact path="/home" element={<Home/>}/>
          
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
