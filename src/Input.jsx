import { useState } from 'react'
import './Input.css'
import {useAppContextValue} from './AppContextProvider'

const Input = () => {
  const [inputValue, setInputValue] = useState({ name: '', age: '', roll: '', emailAddress: '' });
  const [savedData, setSavedData] = useState(false)
  
  const { addData } = useAppContextValue();
  
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(inputValue);
    setInputValue({ name: '', age: '', roll: '', emailAddress: '' });
    setSavedData(!savedData)
  }
return (
<div className ="input-container">
  {savedData?<h2 className='saved-text'>Your details have been saved!</h2>:null}

<form onSubmit={handleSubmit}>
<div className="mb-3">
  <label htmlFor="roll-input" className="form-label">Roll No.</label>
  <input type="number" name='roll' className="form-control" id="roll-input" placeholder="1234" value={inputValue.roll} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="name-input" className="form-label">Name</label> 
  <input type="text" name='name' className="form-control" id="name-input" placeholder="John Doe" value={inputValue.name} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="age-input" className="form-label">Age</label>
  <input type="number" name='age' className="form-control" id="age-input" placeholder="18" min={17} max={25} value={inputValue.age} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="email-input" className="form-label">Email address</label>
  <input type="email" name='emailAddress' className="form-control" id="email-input" placeholder="name@example.com" value={inputValue.emailAddress} onChange={handleChange} />
</div>
<div className="button">
<button type="submit" className="btn">Add</button>
</div>
</form>
  </div>
  )
}

export default Input;
