import "./App.css";
import Addres from "./components/Addres";
import Personal from "./components/Personal";
import { useState, useEffect } from "react";

function App() {
  const [step, setStep] = useState(1);
  //personal
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  // //address
  // const [AddOne,setAddOne]=useState("");
  // const [AddTwo,setAddTwo]=useState("");
  // const [cityData,setCityData]=useState("");
  // const [code,setCodeData]=useState("");
  // const [stateData,setStateData]=useState("");

  const valide = () => {
    const Errorfo = {};
    if (step === 1) {
      if (!data.name) Errorfo.name = "Required Name";
      if (!data.email) Errorfo.email = "Required Email";
      if (!data.phone) Errorfo.phone = "Required Phone no";
    }
    if (step === 2) {
      if (!data.address1) Errorfo.address1 = "Required address";
      if (!data.city) Errorfo.city = "Required city";
      if (!data.state) Errorfo.state = "Required State";
      if (!data.zip) Errorfo.zip = "Required zip";
    }
    setErrors(Errorfo);
    return Object.keys(Errorfo).length === 0;
  };

  useEffect(() => {
    const saved = localStorage.getItem("multiStepFormData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("multiStepFormData", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const nextMove = () => {
    if (valide() && step < 3) {
      setStep(step + 1);
      console.log("Next Step", step);
    }
  };
  const backMove = () => {
    if (step > 1) {
      setStep(step - 1);
      console.log("Back Step", step);
    }
  };

  const handleSubmit = () => {
    if (valide()) {
      localStorage.removeItem("multiStepFormData");
      setData({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });
      setStep(1);
    }
  };
  console.log(errors);
  console.log(errors.name);
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Heading</h1>

      <div className="flex justify-between mb-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 mx-1 rounded ${
              step >= s ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {step === 1 ? (
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
      ) : step === 2 ? (
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
      ) : (
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
      )}
      <div className="flex justify-between mx-10">
        <button
          onClick={backMove}
          disabled={step === 1}
          className={`px-4 py-2 rounded ${
            step === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Back
        </button>
        {step < 3 ? (
          <button
            onClick={nextMove}
            disabled={step === 3}
            className={`px-4 py-2 rounded ${
              step === 3
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
