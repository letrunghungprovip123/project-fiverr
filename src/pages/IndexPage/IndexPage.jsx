//Trang chủ của fiverr

import React from 'react'
import Banner from '../../components/IndexComponent/Banner'
import Service from '../../components/IndexComponent/Service'
import Solution from '../../components/IndexComponent/Solution'
import Video from '../../components/IndexComponent/Video'
import LogoMaker from '../../components/IndexComponent/LogoMaker'
import Guide from '../../components/IndexComponent/Guide'
import LastBanner from '../../components/IndexComponent/LastBanner'
const IndexPage = () => {
  return (
    <>
        <Banner/>
        <Service />
        <Solution />
        <Video />
        <LogoMaker />
        <Guide />
        <LastBanner/>
    </>
  )
}

export default IndexPage