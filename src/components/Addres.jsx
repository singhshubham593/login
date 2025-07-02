import React from 'react'

const Addres = ({data,setData,errors}) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <div className="m-10 bg-blue-100 rounded-2xl">
          <div className="p-4">
            <label htmlFor="address1" className="mx-3">
              Address 1 :{" "}
            </label>
            <input
              type="text"
              name="address1"
              placeholder="Address 1"
              value={data.address1}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.address1 ? "border-red-600" : "border-black"
              }`}
            />
            {errors.address1 && (
              <p className="text-red-500 text-sm">{errors.address1}</p>
            )}
          </div>

          <div className="p-4">
            <label htmlFor="address2" className="mx-3">
              Address 2 :{" "}
            </label>
            <input
              type="text"
              placeholder="Address 2"
              name="address2"
              value={data.address2}
              onChange={handleChange}
              className="bg-gray-200 border p-2 rounded-2xl"
            />
          </div>
          <div className="p-4">
            <label htmlFor="city" className="mx-3">
              City :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter City"
              name="city"
              value={data.city}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.city ? "border-red-600" : "border-black"
              }`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>
          <div className="p-4">
            <label htmlFor="state" className="mx-3">
              State :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter State"
              name="state"
              value={data.state}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.state ? "border-red-600" : "border-black"
              }`}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state} Hello</p>
            )}
          </div>
          <div className="p-4">
            <label htmlFor="zip" className="mx-3">
              Code :{" "}
            </label>
            <input
              text="text"
              Placeholder="Zip Code"
              name="zip"
              value={data.zip}
              onChange={handleChange}
              className={`bg-gray-200 border p-2 rounded-2xl ${
                errors.zip ? "border-red-600" : "border-black"
              }`}
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip} Hello</p>
            )}
          </div>
        </div>
  )
}

export default Addres
