import { useState,useEffect } from 'react';
import { useAppContextValue } from './AppContextProvider';
import './Show.css'
import { RiDeleteBin5Line } from "react-icons/ri";

const Show = () => {
const {data, setData} = useAppContextValue();
const[message, setMessage]=useState(false)

useEffect(() => {
    if (data.length === 0) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  }, [data]);

const handleDelete=(id)=>{
const updatedData= data.filter(item=>item.id!==id)
setData(updatedData)
}


return (


<div className="show-container">
  {message ? (
    <h4>No details yet</h4>
  ) : (
    <>
      {data.map((inputData) => (
        <div className="card" style={{ width: '18rem' }} key={inputData.id}>
          <div className="card-body">
            <h5 className="card-title">Student Details</h5>
            <p>Roll No.: {inputData.roll}</p>
            <p>Name: {inputData.name}</p>
            <p>Age: {inputData.age}</p>
            <p>Email address: {inputData.emailAddress}</p>
            <div className="del">
              <button className='delete-button' onClick={() => handleDelete(inputData.id)}>
                <RiDeleteBin5Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )}
</div>


  )
}

export default Show

