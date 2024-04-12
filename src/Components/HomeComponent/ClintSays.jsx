import React from 'react'

const ClintSays = () => {
  return (
    <>
      <section id="ClintSays" className='py-28'>
        <div className="container flex items-center justify-center">

            <div className="saysWarpper   p-5 flex flex-col  gap-9 md:flex-row lg:gap-92 lg:w-[52rem]">
                <div className='w-80 '>
                    <h3 className='text-2xl font-bold pb-4 w-52'>
                        What our clients say about us
                    </h3>
                    <p className='text-xs w-[240px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>

                <div className=''>
                    <h3 className='text-2xl font-thin mb-8'>
                        "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                    </h3>
                    <div className='flex gap-x-4'>
                        <div className='w-[52px] h-[52px] bg-black rounded-full'>
                            <img src="" alt="png" />
                        </div>
                        <div>
                            <h6 className='whisper-regular'><em >Pronob Biswas</em></h6>
                            <span className='whisper-regular text-xl leading-[0px] py-0 bg-slate-300'>vice president</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default ClintSays
