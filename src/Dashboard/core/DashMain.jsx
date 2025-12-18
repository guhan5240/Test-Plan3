import React from 'react'
import { Outlet } from 'react-router-dom'

import { SideBar } from './SIdeBar'

export const DashMain = () => {
  return (
      <>
                <div className='bg-blue-50'>
                 
                    <main className='absolute left-100 top-20'>
                        <Outlet />
                    </main>
                    <div>
                        <SideBar />
                    </div>
                   
                </div>
            </>
   
  )
}


