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
          {/* <div className='flex flex-col'>
          <h2> "Name :" {data.name},</h2>
        <h3>"Name :" {data.name},</h3>
        <h3></h3>"Email :" {data.email},
        <h3></h3>"Phone No :" {data.phone},
        "Address 1 :" {data.address1},
        "Address 2 :" {data.address2},
        "City :" {data.city},
        "State :" {data.state},
        "Code :" {data.zip},
        </div> */}
    </div>
  )
}

export default Formdata
