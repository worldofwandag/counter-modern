'use client'

import { ChangeEvent, useState } from "react";

type Countercolor = 'text-green-600' | 'text-red-600' | 'text-gray-800'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleDecrement = (): void => {
    setCount(prev => prev - step)
  }

  const handleReset = (): void => {
    setCount(0)
  }

  const handleIncrement = (): void => {
    setCount(prev => prev + step)
  }

  const handleStepCount = (e: ChangeEvent<HTMLInputElement>) => {
    const newStep = Number(e.target.value) || 1;
    setStep(newStep)
  }

  const getCounterColor = (): Countercolor => {
    if(count < 0) return 'text-red-600'
    if(count > 0) return 'text-green-600'
    return 'text-gray-800'
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Counter Component</h1>
        
        {/* Display Current Count */}
        <div className={`text-6xl font-bold text-center mb-8 ${getCounterColor()}`}>
          {count}
        </div>
        
        {/* Control Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleDecrement}
            className="flex-1 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition cursor-pointer"
          >
            - Decrement
          </button>
          
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition cursor-pointer"
          >
            Reset
          </button>
          
          <button
            onClick={handleIncrement}
            className="flex-1 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition cursor-pointer"
          >
            + Increment
          </button>
        </div>
        
        {/* Step Control */}
        {/* TYPESCRIPT NOTE: Input attributes like min, type are type-checked */}
        <div className="border-t pt-6">
          <label className="block text-sm font-medium mb-2">
            Step Value: {step}
          </label>
          <input
            type="number"
            value={step}
            onChange={handleStepCount}
            min="1"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
