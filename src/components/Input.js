

function Input({ handeChange,value,title,name,color }) {
  return (
    <label  className="saidbar-label-container">
    <input onChange={handeChange}   type="radio" value={value} name={name}/>
    <span className="checkmark" style={{backgroundColor:color}}></span>{title}
      </label>
  );
};

export default Input;
