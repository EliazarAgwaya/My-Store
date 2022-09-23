import './App.css';
import {Routes, Route} from "react-router-dom"
import Users from './Users';
import Home from './Home';
import Store from './Store';
import Products from './Products';


function App() {
  return (
    <div className="App">
      <Routes>
       {/* <Route exact path="/products" element={<Products/>} />
        <Route exact path="/users" element={<Users/>} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Store/>
    </div>
  );
}

export default App;
