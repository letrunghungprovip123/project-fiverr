import React from 'react'

const Guide = () => {
  return (
    <div className='container py-10 px-5 sm:px-5 xl:px-0'>
        <h3 className='text-4xl lg:text-5xl font-normal mb-10'>Guides to help you grow</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className=''>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" alt="" className='rounded-lg w-2/3 lg:w-full h-[90%] mt-5 lg:mt-0' />
                <p className='font-bold text-xl mt-5'>Start a side business</p>
            </div>
            <div>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg" alt="" className='rounded-lg w-2/3 lg:w-full h-[90%] mt-10 lg:mt-0' />
                <p className='font-bold text-xl mt-5'>Ecommerce bussiness ideas</p>
            </div>
            <div>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" alt="" className='rounded-lg w-2/3 lg:w-full h-[90%] mt-20 lg:mt-0' />
                <p className='font-bold text-xl mt-5'>Start an online and work from home</p>
            </div>
        </div>
    </div>
  )
}

export default Guide