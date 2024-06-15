import React, { useState } from 'react'
import Navbar from '@/ui/Navbar'
import Layout from '@/ui/Layout'
import { Input } from '@/components/ui/input'
import { SelectDemo } from '@/ui/SelectDemo'
import { Button } from '@/components/ui/button'
import shift from '../assets/shift_transparent.png'

const bodyTypes = [
  { value: "lean", label: "Lean" },
  { value: "Muscular", label: "Muscular" },
  { value: "Average", label: "Average" },
  { value: "Obese", label: "Obese" },
];

const desireType = [
  { value: "lean", label: "Lean" },
  { value: "Muscular", label: "Muscular" },
  { value: "V-Taper", label: "V-Taper" },
  { value: "Slim", label: "Slim" }
]

const LandingPage = () => {
  const [selecteedType, setSelectedType] = useState("");
  const [desiredType, setDesiredType] = useState("")
  const handleTypeChange = (value) => {
    setSelectedType(value);
  };
  const handleDesiredChange = (value) => {
    setDesiredType(value)
  }
  return (
    <Layout>
      <div className='bg-black text-white'>
        <div className=' flex justify-center h-[calc(100vh-80px)] items-center gap-10'>
          <img className=' object-cover size-[calc(69vh)]' src={shift} alt='logo' />
          <h1 className=' font-bold bg-color text-9xl'>SHIFT</h1>
        </div>
        <div className=' flex w-full h-[calc(100vh-80px)] items-center justify-center mt-16'>
          <div className=' flex flex-col gap-6  mr-3'>
            <label>BodyType</label>
            <label>Weight</label>
            <label>Height</label>
            <label>Desired Body Type</label>
          </div>
          <div className=' bg-inherit flex flex-col gap-2 '>
            <SelectDemo
              value={selecteedType}
              onChange={handleTypeChange}
              placeholder="Choose Body-type"
              options={bodyTypes}
              label="Body Type"
            />
            <Input type="number" className=" bg-inherit" placeholder="enter weight in kgs" />
            <Input type="number" className=" bg-inherit" placeholder="enter height in cms" />
            <SelectDemo
              value={desiredType}
              onChange={handleDesiredChange}
              placeholder="Desired Body"
              options={desireType}
              label="Desired Body"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage;