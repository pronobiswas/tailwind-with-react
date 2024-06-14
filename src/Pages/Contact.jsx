import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contactUs" className='mx-5 lg:mx-0'>
        <div className="container">
            <div className='max-w-[562px] w-full mx-auto'>
                <h1 className='text-5xl mt-20 mb-3'>Contact Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
                </p>
                <div className="formWarpper py-20">
                    <form >
                        <div className="row flex gap-4">
                            <div className="col w-full">
                                <label htmlFor="Name">Name</label>
                                <br />
                                <input 
                                type="text" 
                                name='name' 
                                id='Name' 
                                placeholder='Enter your name' 
                                className='w-full px-5 mt-3 py-1 border border-transprent rounded-lg hover:border-slate-400'/>
                            </div>
                            <div className="col w-full">
                            <label htmlFor="email">Name</label>
                                <br />
                                <input 
                                type="email" 
                                name='email' 
                                id='email' 
                                placeholder='Enter your Email' 
                                className='w-full px-5 mt-3 py-1 border border-transprent rounded-lg hover:border-slate-400'/>
                            </div>
                        </div>
                        <div className="row flex gap-4 my-12">
                            <div className="col w-full">
                                <label htmlFor="subject">Subject</label>
                                <br />
                                <input 
                                type="text" 
                                name='subject' 
                                id='subject' 
                                placeholder='Enter your subject' 
                                className='w-full px-5 mt-3 py-1 border border-transprent hover:border-slate-400 rounded-lg'/>
                            </div>
                            <div className="col w-full">
                                <label htmlFor="select">Select Subject</label>
                                <br />
                                <select name="select" id="select" className='w-full px-5 mt-3 py-[6px] border border-transprent hover:border-slate-400 rounded-lg'>
                                    <option value="html">html</option>
                                    <option value="html">css</option>
                                    <option value="html">scss</option>
                                    <option value="html">bootstrap</option>
                                    <option value="html">javaScript</option>
                                    <option value="html">tilwind</option>
                                    <option value="html">react</option>
                                    <option value="html">Mui</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w-full">
                                <label htmlFor="masage">Masages</label>
                                <br />
                                <textarea 
                                name="masage" 
                                id="masage" 
                                className='w-full min-h-[250px] mt-3 py-1 border border-transprent hover:border-slate-400 rounded-lg'>
                                </textarea>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className='bg-blue-300 py-5 px-14 rounded-full'>Send Massage</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
