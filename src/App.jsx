import "./App.css";
import Addres from "./components/Addres";
import Personal from "./components/Personal";
import Formdata from "./components/Formdata";
import Navi from "./components/Navi";
import { useState, useEffect } from "react";

function App() {
  const [step, setStep] = useState(1);
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

  const valide = () => {
    const Errorfo = {};
    if (step === 1) {
      if (!data.name) Errorfo.name = "Please Enter Name";
      if (!data.email) Errorfo.email = "Please Enter Email";
      if (!data.phone) Errorfo.phone = "Please Enter Phone no";
    }
    if (step === 2) {
      if (!data.address1) Errorfo.address1 = "Please Enter address";
      if (!data.city) Errorfo.city = "Please Enter city";
      if (!data.state) Errorfo.state = "Please Enter State";
      if (!data.zip) Errorfo.zip = "Please Enter Code";
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

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  //   console.log(data);
  // };
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
        <Personal data={data} setData={setData} errors={errors} />
      ) : step === 2 ? (
        <Addres data={data} setData={setData} errors={errors} />
      ) : (
        <Formdata data={data}/>
      )}
      <Navi step={step} nextMove={nextMove} backMove={backMove} handleSubmit={handleSubmit} /> 
    </div>
  );
}

export default App;
