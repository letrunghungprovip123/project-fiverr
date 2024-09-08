import React from 'react'

const Guides = ({jobType}) => {
  return (
    <div className='container py-10 px-5 sm:px-3 lg:px-0'>
        <div className='block space-y-5 lg:space-y-0 lg:flex items-center justify-between mt-5'>
            <h3 className='text-xl lg:text-3xl font-bold'>Guides related to {jobType?.tenLoaiCongViec}</h3>
            <p className='hover:underline'>{jobType?.tenLoaiCongViec} guides</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-7 gap-10 md:gap-5'>
            <div>
                <img src="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/74773bd8aab051ef8a227380dc4abfc9-1651413395712/how%20to%20chhose%20a%20logo%20font.jpg" alt="" className='rounded-lg w-1/2 md:w-full' />
                <p className='mt-5 font-semibold text-lg lg:text-xl'>The 4 main types of fonts & how to choose the right font for your brand and logo</p>
            </div>
            <div>
                <img src="https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/6f05fb897084d76c87f86da4aece11b8-1649665467147/choosing%20brand%20colors-min.jpg" alt="" className='rounded-lg w-1/2 md:w-full' />
                <p className='mt-3 font-semibold text-lg lg:text-xl'>The ultimate guide to choosing the right colors for your brand</p>
            </div>
            <div>
                <img src="https://fiverr-res.cloudinary.com/image/upload/w_430/q_auto,f_auto/v1/attachments/generic_asset/asset/2508960106117021baf4c9699b982213-1593436732817/children%27s%20book%20illustration.jpg" alt="" className='rounded-lg w-1/2 md:w-full' />
                <p className='mt-3 font-semibold text-lg lg:text-xl'>How to illustrate a children's book: 9 steps to illustrate your book</p>
            </div>
        </div>
    </div>
  )
}

export default Guides