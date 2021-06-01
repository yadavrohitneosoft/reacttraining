import logo from './logo.svg';
import './App.css';
import Header from './includes/Header';
import CarouselNew from './components/Carousel';
import FooterNew from './includes/Footer';
import Cakeslist from './components/Cake/Cakeslist'; 

function App() {

  var details = {
      name:"rohit",
      gender:"male"
  }
  var product = {
    image: "image_path",
    name: "iPhone 12",
    price: "60500",
    discount: "10%"
  }
  return (
    <div className="App">
      <Header details={details} project="rohits project" p="10" >children</Header>
      {/* <CarouselNew /> */}
      <Cakeslist></Cakeslist> 
      <FooterNew />
    </div>
  );
}

export default App;
