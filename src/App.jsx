import './App.css'
import Addres from './components/Addres'
import Personal from './components/Personal'
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  //personal
  const [nameData,setNamData]=useState("");
  const [emalData,setEmalData]=useState("");
  const [noData,setNoData]=useState("");

  //address
  const [AddOne,setAddOne]=useState("");
  const [AddTwo,setAddTwo]=useState("");
  const [cityData,setCityData]=useState("");
  const [code,setCodeData]=useState("");
  const [stateData,setStateData]=useState("");

  const nextMove = () => {
    if (step <3){
      setStep(step + 1);
      console.log("Next Step", step);
    }
  }
  const backMove = () => {
    if (step > 1) {
      setStep(step - 1);
      console.log("Back Step", step);
    }
  }

  return (
    <>
    <div className='max-w-xl mx-auto p-4'>
      <h1 className='text-2xl font-bold text-center'>Heading</h1>
      {step === 1 ?
      <div className='m-10 bg-blue-100 border border-black'>
        <div className='p-5'>
        <label htmlFor='name' className='mx-3'>Name:</label>
        <input 
          type="text" 
          placeholder='Enter name'
          name='name'
          value={nameData}
          onChange={(e)=>setNamData(e.target.value)}
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='email' className='mx-3'>Email No:</label>
        <input 
          type="text" 
          placeholder='Enter Email' 
          name='email'
          onChange={(e)=>setEmalData(e.target.value)}
          value={emalData} 
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='no' className='mx-3'>Phone No:</label>
        <input 
          text='text' 
          Placeholder='Enter phone number' 
          name=''
          onChange={(e)=>setNoData(e.target.value)}
          value={noData} 
          className='bg-gray-200 border border-black p-2'/>
        </div>
         
      </ div>
: step === 2 ?
      <div className='m-10 bg-blue-100 border border-black'>
        <div className='p-4'>
        <label htmlFor='Address' className='mx-3'>Address 1 : </label>
        <input 
          type="text" 
          placeholder='Address 1'
          value={AddOne}
          onChange={(e)=>setAddOne(e.target.value)}
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='Address' className='mx-3'>Address 2 : </label>
        <input 
          type="text" 
          placeholder='Address 2'
          value={AddTwo}
          onChange={(e)=>setAddTwo(e.target.value)}
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='city' className='mx-3'>City : </label>
        <input 
          type="text" 
          placeholder='Enter City' 
          onChange={(e)=>setCityData(e.target.value)}
          value={cityData} 
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='State' className='mx-3'>State : </label>
        <input 
          type="text" 
          placeholder='Enter State' 
          onChange={(e)=>setStateData(e.target.value)}
          value={stateData} 
          className='bg-gray-200 border border-black p-2'/>
        </div>
        <div className='p-4'>
        <label htmlFor='code' className='mx-3'>Code : </label>
        <input 
          text='text' 
          Placeholder='Zip Code' 
          onChange={(e)=>setCodeData(e.target.value)}
          value={code} 
          className='bg-gray-200 border border-black p-2'/>
        </div>
         
      </ div>
:
      <div className='flex flex-col justify-center items-center bg-gray-100 p-5 m-10 border border-black'>
        <h1>Review Your Information</h1>
        <div className='flex flex-col'>
        "Name :" {nameData},
        "Email :" {emalData},
        "Phone No :" {noData},
        "Address 1 :" {AddOne},
        "Address 2 :" {AddTwo},
        "City :" {cityData},
        "State :" {stateData},
        "Code :" {code},
        </div>
      </div>
}
      <div className='flex justify-between mx-10'>
          <button className='bg-gray-500 p-2 m-2 rounded-xl' onClick={backMove} disable={step===1}>Back</button>
          <button className='bg-white p-2 m-2 rounded-xl' onClick={nextMove}>Next</button>
      </div>
    </ div>
    </>
  )
}

export default App
