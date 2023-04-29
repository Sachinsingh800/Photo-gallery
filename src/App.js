
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Blog from './Components/Pages/Blog/Blog';
import HomePage from './Components/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
     <NavigationBar /> 
      <div id='home'><HomePage /></div>
      <div id='Blog'><Blog /></div> 
    </div>
  );
}

export default App;
