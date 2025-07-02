import React from 'react'

const Formdata = ({data}) => {
  return (
    <div className="flex flex-col   bg-blue-100 p-5 m-10 rounded-2xl">
          <h1 className="font-bold">Review Your Information</h1>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>
              <strong className="capitalize">{key}:</strong>{" "}
              {value || "Enter Data"}
            </p>
          ))}
          
    </div>
  )
}

export default Formdata
