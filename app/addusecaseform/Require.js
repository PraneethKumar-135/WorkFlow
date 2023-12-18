'use client'
import React, { useState } from 'react'

const Require = () => {

  const details = { assignto: '', describe: '', select1: '', date1: '', comm1: '', select2: '', date2: '', comm2: '', select3: '', date3: '', comm3: '' }
  const Second = { Sassignto: '', Sdescribe: '', Sselect1: '', Sdate1: '', Scomm1: '', Sselect2: '', Sdate2: '', Scomm2: '', Sselect3: '', Sdate3: '', Scomm3: '', Sselect4: '', Sdate4: '', Scomm4: '' };
  const Third = { Tassignto: '', Tdescribe: '', Tselect1: '', Tdate1: '', Tcomm1: '', Tselect2: '', Tdate2: '', Tcomm2: '', Tselect3: '', Tdate3: '', Tcomm3: '', Tselect4: '', Tdate4: '', Tcomm4: '', Tselect5: '', Tdat5: '', Tcomm5: '', Tselect6: '', Tdate6: '', Tcomm6: '', Tselect7: '', Tdate7: '', Tcomm7: '', Tselect8: '', Tdate8: '', Tcomm8: ''  };
  const Fourth = { Fassignto: '', Fdescribe: '', Fselect1: '', Fdate1: '', Fcomm1: '', Fselect2: '', Fdate2: '', Fcomm2: '', Fselect3: '', Fdate3: '', Fcomm3: '', Fselect4: '', Fdate4: '', Fcomm4: '', Fselect5: '', Fdate5: '', Fcomm5: '', Fselect6: '', Fdate6: '', Fcomm6: '' };
  const Fifth = { FIassignto: '', FIdescribe: '', FIselect1: '', FIdate1: '', FIcomm1: '', FIselect2: '', FIdate2: '', FIcomm2: '', FIselect3: '', FIdate3: '', FIcomm3: '', FIselect4: '', FIdate4: '', FIcomm4: '' };
  const Six = { SIassignto: '', SIdescribe: '', SIselect1: '', SIdate1: '', SIcomm1: '', SIselect2: '', SIdate2: '', SIcomm2: '' };
  const [Details, setDetails] = useState(details)
  const [MockDev, setMOckDev] = useState(Second)
  const [ActualDev, setAcutalDev] = useState(Third)
  const [CICdTest, setCICdTest] = useState(Fourth)
  const [Stage, steStage] = useState(Fifth)
  const [Publish, setPublish] = useState(Six)

  const setOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...Details, [name]: value })
    setMOckDev({ ...MockDev, [name]: value })
    setAcutalDev({ ...ActualDev, [name]: value })
    setCICdTest({ ...CICdTest, [name]: value })
    steStage({ ...Stage, [name]: value })
    setPublish({ ...Publish, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const Data = [Details,MockDev,ActualDev,CICdTest,Stage,Publish]
    console.log(Data);
  }

  return (
    <div>



      {/* 2.Mock Development */}
      <form onSubmit={submitHandler}>
        <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
          <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
            <div className='text-pink-300 text-xl non-italic font-medium leading-normal'>2.Mock Development</div>
            <div className='text-blue-500'>View More</div>
          </div>

          <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
            <div className='flex flex-col items-start w-[50%]  gap-4 '>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Sassignto' value={MockDev.Sassignto} onChange={setOnchange} />
            </div>

            <div className='flex flex-col items-start w-[50%]  gap-4'>
              <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
              <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' name='Sdescribe' value={MockDev.Sdescribe} onChange={setOnchange} />
            </div>
          </div>
        </div>

        {/* Mock Development Sub-Stage Details */}

        <div className='w-[100%] py-2 bg-white'>
          <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Mock Development Sub-Stage Details</div>
          <div className='w-[95%]'>

            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-28'>Create API Spec</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect1' value={MockDev.Sselect1} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate1' value={MockDev.Sdate1} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm1' value={MockDev.Scomm1} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-20'>Create Postman Test</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect2' value={MockDev.Sselect2} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate2' value={MockDev.Sdate2} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm2' value={MockDev.Scomm2} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500'>Create UI Screen with Mock API</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect3' value={MockDev.Sselect3} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate3' value={MockDev.Sdate3} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm3' value={MockDev.Scomm3} onChange={setOnchange}></input>
              </div>
            </div>


            <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
              <h1 className='text-blue-500 mr-32'>Create Test ApI</h1>
              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Assign To:</label>
                <select className='w-[100%] px-3 py-1 border border-neutral-300' name='Sselect4' value={MockDev.Sselect4} onChange={setOnchange}>
                  <option>@</option>
                </select>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Start - End date</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date' name='Sdate4' value={MockDev.Sdate4} onChange={setOnchange}></input>
              </div>

              <div className='flex flex-col gap-2 w-[25%]'>
                <label className='w-[100%]'>Comments</label>
                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text' name='Scomm4' value={MockDev.Scomm4} onChange={setOnchange}></input>
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