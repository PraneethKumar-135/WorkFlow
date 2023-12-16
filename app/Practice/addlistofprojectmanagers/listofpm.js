import React from 'react'

const Projectmanager = () => {
  return (
    <div className='flex flex-col gap-4 bg-white p-5'>
      <div className='flex items-center justify-between'>
        <h1 className='text-slate-700 text-xl non-italic font-semibold leading-none'>List Of Project Managers</h1>
        <button className='flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white'>Add</button>
      </div>
      <div>
        <input className='border border-gray-500 bg-white rounded w-64 h-9 pl-3' placeholder='Search'></input>
      </div>
      <div className='w-[100%] border border-gray-400 pt-5 pb-6 px-6 flex justify-center rounded'>
        <div className='rounded-lg bg-white shadow-md w-[90%] border border-gray-200 border-t-0'>
          <div className=' flex flex-col gap-5 mt-3'>
            <div className='flex items-center justify-around relative left-16'>
              <h1>Name</h1>
              <h1 className='relative left-10'>Last Active</h1>
              <h1 className='relative right-14'>Role</h1>
            </div>
            <div className='flex items-center justify-around'>
              <div className='border border-gray-200 w-[98%] '></div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-around p-4'>
              <input type='checkbox' />

              <div className='flex items-center gap-3'>
                <img className='rounded-full w-16 h-16' src='https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg' alt='Profile' />

                <div>
                  <h1 className='text-neutral-800 text-lg non-italic font-bold leading-none'>Alex Ben</h1>
                  <h3 className='text-stone-300 text-sm non-italic font-normal leading-none'>Alex.benn@gmail.com</h3>
                </div>
              </div>

              <div className='text-sm non-italic font-normal leading-none text-blue-500'>Before 40 Min</div>
              <h1 className='text-sm non-italic font-normal leading-none text-stone-500'>Project Manager</h1>
            </div>



            <div className='flex items-center justify-around p-4'>
              <input type='checkbox'></input>
              
              <div className='flex items-center gap-3'>
                <div><img className='rounded-full w-16 h-16' src='https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_1280.jpg'></img></div>
                
                <div>
                  <h1 className='text-neutral-800 text-lg non-italic font-bold leading-none'>Angela Moss</h1>
                  <h3 className='text-stone-300 text-sm non-italic font-normal leading-none'>Angela.moss@gmail.com</h3>
                </div>

              </div>
              <div className='text-sm non-italic font-normal leading-none text-blue-500 '>Onlinbkbjke</div>
              <h1 className='text-sm non-italic font-normal leading-none text-stone-500'>Project Manager</h1>
            </div>


            <div className='flex items-center justify-around p-4'>
              <input type='checkbox'></input>

                <div className='flex items-center gap-3'>
                  <div><img className='rounded-full w-16 h-16' src='https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg'></img></div>
                  
                  <div>
                    <h1 className='text-neutral-800 text-lg non-italic font-bold leading-none'>Della Samantha</h1>
                    <h3 className='text-stone-300 text-sm non-italic font-normal leading-none'>Della.samatha@gmail.com</h3>
                  </div>

                </div>
                <div className='text-sm non-italic font-normal leading-none text-blue-500 '>Just Now</div>
                <h1 className='text-sm non-italic font-normal leading-none text-stone-500'>Project Manager</h1>
            </div>


            <div className='flex items-center justify-around p-4'>
              <input type='checkbox'></input>

                <div className='flex items-center gap-3'>
                  <div><img className='rounded-full w-16 h-16' src='https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg'></img></div>
                  
                  <div>
                    <h1 className='text-neutral-800 text-lg non-italic font-bold leading-none'>Jenner</h1>
                    <h3 className='text-stone-300 text-sm non-italic font-normal leading-none'>Jenner.01@gmail.com</h3>
                  </div>
                </div>
                
                <div className='text-sm non-italic font-normal leading-none text-blue-500 '>22/11/2023</div>
                <h1 className='text-sm non-italic font-normal leading-none text-stone-500'>Project Manager</h1>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Projectmanager