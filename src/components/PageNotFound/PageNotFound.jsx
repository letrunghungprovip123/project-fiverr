import React from 'react'
import { Link } from 'react-router-dom'
import { useLottie } from "lottie-react";
import PageNotFound404 from "../../assets/animation/PageNotFound404.json"
const PageNotFound = () => {
  const options = {
    animationData: PageNotFound404,
    loop: true
  };
  const {View} = useLottie(options)
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='w-[110%] sm:w-[60%] lg:w-[50%] xl:w-[40%]'>{View}</div>
        <Link to={"/"} className='py-2 px-5 rounded-lg bg-black text-white'>Bấm vào để quay về trang chủ</Link>
    </div>
  )
}

export default PageNotFound