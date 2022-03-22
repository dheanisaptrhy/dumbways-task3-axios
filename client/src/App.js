import React, { useContext, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './pages/Landing'
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'
import CardSignIn from './components/auth/CardSignIn';
import CardSignUp from './components/auth/CardSignUp';
import Home from './pages/Home';
import SubscribePage from './pages/SubscribePage';
import ProfilePage from './pages/ProfilePage';
import DetailPage from './pages/DetailPage';
import AdminBook from './pages/AdminBook';
import AdminPage from './pages/AdminPage';

import {API, setAuthToken} from './config/api'
import { UserContext } from './context/userContext';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  let navigate = useNavigate();

  // usercontext
  const [state, dispatch] = useContext(UserContext)
  // console.log(state)

  //redirect authentication landing page
  useEffect(()=>{
    if(!state.isLogin){
      navigate("/")
    }else{
      if(state.user.status === "admin"){
        navigate("/adminHome")
      }else{
        navigate("/home")
      }
    }
  }, [state])

  //cek token
  const checkUser = async ()=>{
    try {
      const response = await API.get('/check-user')

      if(response.status === 404){
        return dispatch({
          type: "AUTH_ERROR"
        })
      }

      let payload = response.data.data.user
      payload.token = localStorage.token

      dispatch({
        type:"USER_SUCCESS",
        payload
      })
    } catch (error) {
      console.log(error);
    }
  }

  // panggil fungsi token
  useEffect(()=>{
    checkUser()
  },[])


  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
