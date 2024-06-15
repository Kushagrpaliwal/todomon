import Image from 'next/image'


const Tutorial = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-white	">
      <div className="w-[640px] h-[87px] font-light italic	text-center mt-[80px] text-lg tututitle">
        “Navigate effortlessly through your tasks with clear steps, ensuring nothing falls through the cracks on your journey to achievement”
      </div>
      <div className="flex flex-col mt-[50px] mb-[60px]">
      <div className='flex flex-row tutucards'>
      <div className='flex flex-col'>
        <div className="flex justify-center w-[270px] h-[365px] m-[20px] rounded-3xl drop-shadow-xl bg-white ">
            <Image src="/t1.svg" alt="tutorialimg" width={270} height={270} />
        </div>
        <li className='flex justify-center w-[270px] m-[20px] text-light italic text-lg'>Think</li>
      </div>
      <div className='flex flex-col'>
        <div className="flex justify-center w-[270px] h-[365px] m-[20px] rounded-3xl drop-shadow-xl bg-white ">
            <Image src="/t2.svg" alt="tutorialimg" width={270} height={270} />
        </div>
        <li className='flex justify-center w-[270px] m-[20px] text-light italic text-lg'>Add</li>
      </div>
      <div>
        <div className="flex justify-center w-[270px] h-[365px] m-[20px] rounded-3xl drop-shadow-xl bg-white ">
            <Image src="/t3.svg" alt="tutorialimg" width={270} height={270} />
        </div>
        <li className='flex justify-center w-[270px] m-[20px] text-light italic text-lg'>Delete</li>
      </div>
      <div>
        <div className="flex justify-center w-[270px] h-[365px] m-[20px] rounded-3xl drop-shadow-xl bg-white ">
            <Image src="/t4.svg" alt="tutorialimg" width={270} height={270} />
        </div>
        <li className='flex justify-center w-[270px] m-[20px] text-light italic text-lg'>Completed</li>
      </div>
        </div>
      <div className='flex flex-row list-none '>

      </div>
      </div>
      <p className="italic font-extrabold	text-[38px] mb-[50px]">Its Just That Simple !</p>
    </section>
  )
}

export default Tutorial