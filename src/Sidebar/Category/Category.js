import Input from "../../components/Input";
import "../Category/Catigory.css"
 function Category({handeChange}){
  
  return (
          
<div>
  <h2 className="saidbar-title">Category</h2>
<div>
<label className="saidbar-label-container">
  <input   onChange={handeChange} type="radio"  value='' name="test" />
  <span className="checkmark"></span>All
</label>

<Input 
handeChange={handeChange}
value="sneakers"
title="Sneakers"
name="test"
/>

<Input 
handeChange={handeChange}
value="flats"
title="Flats"
name="test"
/>


<Input 
handeChange={handeChange}
value="sandals"
title="Sandals"
name="test"
/>

<Input 
handeChange={handeChange}
value="heels"
title="Heels"
name="test"
/>

</div>
  </div>

  )
    
  
}

export default Category;
