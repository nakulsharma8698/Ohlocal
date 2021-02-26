import logo from './logo.svg';
import './App.css';
import Home from './home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Products from './Components/prod';
import Footer from './Components/Footer/footer';
import Header from './Components/Navbar/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/" component={Home}/>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
