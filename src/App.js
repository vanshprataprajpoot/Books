import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const  App =()=>{

  return (
      <>
              
       <Router>
          <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/category" element={<Category/>}></Route>
              <Route path="/faq" element={<Faq/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>
          </Routes>
       </Router>
       <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </>
  );
}
export default App;