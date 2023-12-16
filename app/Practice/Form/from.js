import React from 'react'

const from = () => {
  return (
    <form>
          {/* Requirement section */}

          <div className='flex h-44 flex-col items-center shrink-0 se gap-8 bg-white mb-4'>
            <div className='w-[100%] px-6 py-4 h-14 flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
              <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>1.Requirement</div>
              <div className='text-blue-500'>View More</div>
            </div>

            <div className='flex px-6 items-start ml-4 self-stretch w-[80rem] gap-4 border-y border-t-neutral-300 border border-b-0 border-x-0'>
              <div className='flex flex-col items-start w-[39.65rem] h-[1.375rem] gap-4 '>
                <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
              </div>

              <div className='flex flex-col items-start w-[39.65rem] h-[1.375rem] gap-4'>
                <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
              </div>
            </div>
          </div>

          {/* Requirement Sub-Stage Details */}
          <div className='w-[100%] py-2 bg-white'>
            <div className=' w-[78.6rem] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Requirement Sub-Stage Details</div>
            <div className='w-[78.6rem]'>

              <div className='flex items-center justify-between mt-1  shadow-sm shadow-neutral-300'>
                <div className='text-blue-500 ml-5'>Create Usecase Document</div>
                <div className='flex gap-8 items-center'>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Assign To:</label>
                    <select className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' placeholder='@'>
                      <option>@</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Start - End date</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type=''></input>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Comments</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type='text'></input>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between mt-1 gap-4 shadow-sm shadow-neutral-300'>
                <div className='text-blue-500 ml-5'>Create Screen Design</div>
                <div className='flex gap-8 items-center'>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Assign To:</label>
                    <select className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' placeholder='@'>
                      <option>@</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Start - End date</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type=''></input>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Comments</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type='text'></input>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between mt-1'>
                <div className='text-blue-500 ml-5'>Updating Usecase in Netlifi</div>
                <div className='flex gap-8 items-center'>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Assign To:</label>
                    <select className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' placeholder='@'>
                      <option>@</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Start - End date</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type=''></input>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='w-[100%]'>Comments</label>
                    <input className='w-[18.75rem] h-8 px-3 py-1 border border-neutral-300' type='text'></input>
                  </div>
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
  )
}

export default from