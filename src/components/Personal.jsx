import React from 'react'

const Personal = ({data,setData,errors }) => {
   const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <div className="m-10 bg-blue-100 rounded-2xl">
          <div className="p-5">
            <label htmlFor="name" className="mx-3">
              Name :
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.name ? "border-red-600" : "border-black"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}Hello</p>
            )}
          </div>

          <div className="p-4">
            <label htmlFor="email" className="mx-3">
              Email :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.email ? "border-red-600" : "border-black"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email} Hello</p>
            )}
          </div>
          <div className="p-4">
            <label htmlFor="phone" className="mx-3">
              Phone :{" "}
            </label>
            <input
              text="text"
              Placeholder="Enter phone number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.phone ? "border-red-600" : "border-black"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
  )
}

export default Personal
