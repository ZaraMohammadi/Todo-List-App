import React, { useState } from 'react'

const ToggleButton = ({data, handleStatus}) => {
  const [isChecked, setIsChecked] = useState(data.status)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleStatus(!isChecked);
  }

  return (
    <>
      <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          name='autoSaver'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-green-400' : 'bg-red-400'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-slate-200 duration-200 ${
              isChecked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-black'>
          Task <span className='pl-1'> {isChecked ? 'DONE' : 'TODO'} </span>
        </span>
      </label>
    </>
  )
}

export default ToggleButton;
