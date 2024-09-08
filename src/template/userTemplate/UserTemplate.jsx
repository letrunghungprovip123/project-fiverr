import React, { useEffect } from 'react'
import UserHeader from '../../components/UserHeader/UserHeader'
import UserFooter from '../../components/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getValueJobApi } from '../../redux/congViecSlice'

const UserTemplate = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getValueJobApi())
  },[])
  return (
    <div>

        {/* Header */}
        <UserHeader />
        {/* main */}
        <main>
            <Outlet />
        </main>
        {/* Footer */}
        <UserFooter />
    </div>
  )
}

export default UserTemplate