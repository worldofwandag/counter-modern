'use client'
import { ChangeEvent, useState } from "react";

type Countcolor = 'text-green-600' | 'text-red-600' | 'text-gray-800'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = (): void => {
    setCount(prev => prev + step);
  }

  const handleDecrement = (): void => {
    setCount(prev => prev - step)
  }

  const handleReset = (): void => {
    setCount(0)
  }

  const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStep = Number(e.target.value) || 1;
    setStep(newStep)
  }

  const getCountColor = (): Countcolor => {
    if (count > 0) return 'text-green-600';
    if (count < 0) return 'text-red-600';
    return 'text-gray-800'
  }

 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Counter Component</h1>
        
        {/* Display Current Count */}
        <div className={`text-6xl font-bold text-center mb-8 ${getCountColor()}`}>
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
            Step Size: {step}
          </label>
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 rounded text-sm">
          <p className="font-semibold mb-2">Key TypeScript Concepts:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Type inference: useState(0) → number type</li>
            <li>Event types: ChangeEvent&lt;HTMLInputElement&gt;</li>
            <li>Return types: (): void and custom types</li>
            <li>Union types: 'value1' | 'value2' | 'value3'</li>
            <li>Import types from 'react'</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
