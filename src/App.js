// import logo from './logo.svg';
import './App.css';

import RoutesComp from "./Component/Routes/Routes";
// import Nav from './Component/Login/nav';
import NavMenu from './Component/NavBar/NavBar';
// import HomePageGrid from './HomePageGrid/HomePageGrid';
import MemberHeader from './Component/MemberHeader/MemberHeader';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
    
      <MemberHeader/>
      <NavMenu/>
 
      
      <RoutesComp />
    
      <Footer/>
      
    </div>
  );
}

export default App;
