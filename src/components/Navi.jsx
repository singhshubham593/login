import React from 'react'
import App from '../App'

const Navi = ({step,nextMove,backMove,handleSubmit}) => {
    
  return (
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
  )
}

export default Navi
