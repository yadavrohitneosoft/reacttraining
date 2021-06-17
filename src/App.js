import logo from './logo.svg'; 
import './App.css';
import Header from './includes/Header';
import CarouselNew from './components/Carousel';
import Footer from './includes/Footer';
import Cakelist from './components/Cake/Cakelist'; 
import Signup from './components/Register/Signup';
import Login from './components/Login/Login';
import React, {Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './includes/PageNotFound';
import CakeDetails from './components/Cake/CakeDetails';
import Checkout from './components/Checkout/Checkout';
import Search from './components/Search/Search';
import axios from 'axios';
import Dashboard from './components/Admin/Dashboard'
import Orders from './components/My-Orders/Orders'

//--------------LAZY LOADING CONCEPT-------------------------------
//here we are lazy loading the cart component 
//Note: Old method - import Cart from './components/Cart/Cart';
  var Cart = React.lazy(()=> import('./components/Cart/Cart')); 
//now we will initialise lazy loading with Suspense keyword
  Cart = <Suspense fallback={<div>loading...</div>}><Cart></Cart></Suspense>
//--------------LAZY LOADING CONCEPT-------------------------------

function App() {
  var [login,setLogin] = useState(false)
  const token = localStorage.getItem('token');

  //setting token in headers for every axios request
  axios.interceptors.request.use((request) => {
    request.headers["authtoken"] = localStorage.getItem('token')
    return request
  })

  // useEffect(()=>{
  //   if(localStorage.token){
  //     axios({
  //       method: 'get',
  //       url: process.env.REACT_APP_BASE_URL + '/getuserdetails',
  //       headers: {
  //         authToken: localStorage.token
  //       }
  //     })
  //   }
  // },[])

   
  //function
  var doLogin = ()=>{ 
    setLogin(true) //set setLogin is true
  }
  
  //development environment check
  //console.log('>>>>>>>', process.env)

  return (
    <div className="App">
      <Router>
        {/* we are implementing header under Router here because it will common to all the components */}
        <Header>{/* we can pass any data here(in between header tag) and access on component by props.children */}</Header>
        <Switch>
          {/* switch uses when you want to match exact route only once not to check again & again, for e.g. without
              switch pagenotfound component will come on all pages */}
          {/* exact keyword we are using to avoid confusion between routes i.e. it matches with exact path name */}
          <Route exact path="/" > <Home/> </Route> {/* here Home component passed as a tag  */}
          {/* Note: we can not get history in object if we pass component as props. To achieve this, we have to deal with tag */}
          <Route exact path="/signup" component={Signup}></Route> {/* here Signup component passed as a props  */}
          <Route exact path="/login"><Login myLoginProp={doLogin} /></Route> {/* we are passing props with history in object */}
          <Route exact path="/cakeDetails/:cakeId" component={CakeDetails}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/cart">{Cart}</Route>  {/* lazy loading  */}
          <Route exact path="/checkout" ><Checkout/></Route> {/* we are not using exact here because of child routing*/}
          {/* path="/*" will come after all route cz it has a global search, 
              if we put first then other routes will not get search */}
          <Route exact path="/dashboard" ><Dashboard/></Route>
          <Route exact path="/my-orders" component={Orders} />
          <Route exact path="/*" component={PageNotFound}></Route> {/* here PageNotFound component passed as a props  */}
        </Switch>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
