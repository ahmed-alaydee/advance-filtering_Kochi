import "../Recommended/Recommended.css"
import Buttons from "../components/Buttons";

function Recommended({handelClick}) {
  return(

        
        <div > 
          <h2 className="recommended-title">Recommended</h2>
          <div className="recommended-flex">
          <Buttons   onClickHandler={handelClick} value="" title="All Products" />
            <Buttons  onClickHandler={handelClick} value="Nike" title="Nike" />
            <Buttons  onClickHandler={handelClick} value="Adidas" title="Adidas" />
            <Buttons  onClickHandler={handelClick} value="Puma" title="Puma" />
            <Buttons  onClickHandler={handelClick} value="Vans" title="Vans" />


          </div>
        </div>
     
  
  );


  
}

export default  Recommended;
