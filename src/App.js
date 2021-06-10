import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import CarouselNew from './components/Carousel';
import Footer from './includes/Footer';
import Cakelist from './components/Cake/Cakelist'; 
import Signup from './components/Register/Signup';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './includes/PageNotFound';
import CakeDetails from './components/Cake/CakeDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Search from './components/Search/Search';

function App() {
  var [login,setLogin] = useState(false)
  var [likes,setLikes] = useState(0)
  var [dislikes,setDislikes] = useState(0)

  useEffect(()=>{
    //alert('component mounted')
  },[dislikes])
  //console.log('initial value of login>>>>', login)
  //object creation
  var details = {
      name:"rohit",
      email: "rohitydv@gm.com",
      password: "12345"
  } 
  //function
  var myPhone = ()=>{
    //alert(1)
    setLogin(true) //set setLogin is true
  }
  
  //development environment check
  //console.log('>>>>>>>', process.env)

  return (
    <div className="App">
      {/* <CarouselNew /> */}
      {/* <Cakelist></Cakelist>  */}

      {/* <Signup callme={myPhone} details={details} ></Signup> */}
      {/* {likes}<button className="btn btn-success" onClick={()=>{ setLikes(likes+1) }} >Like</button>
      <button className="btn btn-danger" onClick={()=>{ setDislikes(dislikes+1) }} >Dislike</button>{dislikes}
      <Login callme={myPhone} details={details} ></Login> */}
      <Router>
        {/* we are implementing header under Router here because it will common to all the components */}
        <Header isLoggedin={login} details={details} project="rohits project" p="10" >children</Header>
        <Switch>
          {/* switch uses when you want to match exact route only once not to check again & again, for e.g. without
              switch pagenotfound component will come on all pages */}
          {/* exact keyword we are using to avoid confusion between routes i.e. it matches with exact path name */}
          <Route exact path="/" > <Home/> </Route> {/* here Home component passed as a tag  */}
          {/* Note: we can not get history in object if we pass component as props. To achieve this, we have to deal with tag */}
          <Route exact path="/signup" component={Signup}></Route> {/* here Signup component passed as a props  */}
          <Route exact path="/login"><Login x="10" /></Route> {/* we are passing props with history in object */}
          <Route exact path="/cakeDetails/:cakeId" component={CakeDetails}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/cart"><Cart name="rohit"></Cart></Route> 
          <Route path="/checkout" ><Checkout/></Route> {/* we are not using exact here because of child routing*/}
          {/* path="/*" will come after all route cz it has a global search, 
              if we put first then other routes will not get search */}
          <Route exact path="/*" component={PageNotFound}></Route> {/* here PageNotFound component passed as a props  */}
        </Switch>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
