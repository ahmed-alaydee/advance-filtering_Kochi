import "../Sidebar/sidbar.css"
import Price from "./price/Price";
import Color from "./Category/Color/Color";
import Category from "./Category/Category";
import { FaShoppingCart } from "react-icons/fa";
 function Saidbar( {handeChange} ) {
console.log(handeChange)
  return( <>
  
  <section className="saidbar">
      <div className="logo-container">
        <h1> <FaShoppingCart /> </h1>
      </div>

      <Category handeChange={handeChange} />
      <Price handeChange={handeChange} />
      < Color handeChange={handeChange} />

  </section>
  </>
  
  );
 
}

export default Saidbar;
