import Input from "../../components/Input";
import "../price/Price.css"


function Price({handeChange}) {

  return (
  
  <div className="ml">
  <h2 className="sidbar-title price-title">Price</h2>

  <label className="saidbar-label-container">
  <input   onChange={handeChange} type="radio"  value='' name="test2" />
  <span className="checkmark"></span>All
</label>


<Input
handeChange={handeChange}
value={50}
title="$0-50"
name="test2"
/>

<Input
handeChange={handeChange}
value={100}
title="$50-100"
name="test2"
/>

<Input
handeChange={handeChange}
value={150}
title="$100-150"
name="test2"
/>

<Input
handeChange={handeChange}
value={200}
title="Over $150"
name="test2"
/>


  </div>
  
  
  );
  
  
}

export default Price;
