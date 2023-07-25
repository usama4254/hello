// import logo from './logo.svg';
import './App.css';
import Header from './Header';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import BestSeller from './BestSeller';
import MyCarousel from './MyCarousel';
import Latest from './Latest';



function App() {
  return (
   <>
   
   
   <Header/>
   {/* <BestSeller/> */}
   <MyCarousel/>
   <Latest/>
   </>

  //  </>
    
  )
}

export default App;
