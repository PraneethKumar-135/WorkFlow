'use client'
import React, { useState } from 'react'

const Require = () => {

  const details = { assignto: '', describe: '', select1: '', date1: '', comm1: '' , select2: '', date2: '', comm2: '', select3: '', date3: '', comm3: '' }
  
  const [Details, setDetails] = useState(details)
  
  const setOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...Details, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Details);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* Requirement section */}

        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>1.Requirement</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='assignto' value={Details.assignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='describe' value={Details.describe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Requirement Sub-Stage Details */}
        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Requirement Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 ml-5'>Create Usecase Document</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='select1' value={Details.select1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date1' value={Details.date1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm1' value={Details.comm1} onChange={setOnchange}></input>
              </div>
            </div>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 pl-14'>Create Screen Design</h1>

              <div className='flex flex-col gap-2 w-[25%] '>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='select2' value={Details.select2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date2' value={Details.date2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm2' value={Details.comm2} onChange={setOnchange}></input>
              </div>

            </div>

            <div className='flex items-center justify-around  w-[100%]'>
              <h1 className='text-blue-500 ml-5'>Updating Usecase in Netlifi</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='select3' value={Details.select3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='date3' value={Details.date3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='comm3' value={Details.comm3} onChange={setOnchange}></input>
              </div>
            </div>

          </div>
        </div>
        <div className='flex items-center justify-end p-4'>
          <div className='flex gap-4 text-lg'>
            <button className='w-28 h-10 border'>Cancel</button>
            <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Require