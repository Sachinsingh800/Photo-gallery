
import './App.css';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Blog from './Components/Pages/Blog/Blog';
import HomePage from './Components/Pages/HomePage/HomePage';

function App() {
  return (
    < div className="App">
     <NavigationBar /> 
     <div id='home'><HomePage /></div>  
       <div id='blog'><Blog /></div> 
        <div><Footer /></div> 
    </div>
  );
}

export default App;
