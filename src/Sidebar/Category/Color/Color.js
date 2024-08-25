import Input from "../../../components/Input";
import "../Color/Color.css";


 function Color({handeChange}) {
  return (
  
  <div className="">
<h2 className="color-title" >Color</h2>

<label className="saidbar-label-container">
  <input   onChange={handeChange} type="radio"  value='' name="test3" />
  <span className="checkmark all"></span>All
</label>

<Input
handeChange={handeChange}
value="black"
title="Black"
name="test3"
color="black"
/>

<Input
handeChange={handeChange}
value="blue"
title="Blue"
name="test3"
color="blue"
/>

<Input
handeChange={handeChange}
value="red"
title="Red"
name="test3"
color="red"
/>

<Input
handeChange={handeChange}
value="green"
title="Green"
name="test3"
color="green"
/>


<label className="saidbar-label-container">
  <input   onChange={handeChange} type="radio"  value='white' name="test3" />
  <span className="checkmark" style={{background:"white",border:"2px solid black"}}></span>All
</label>


  </div>
  );
    
}

export default Color;
