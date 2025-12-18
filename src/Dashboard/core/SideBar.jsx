import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (

  <div className="min-h-[calc(100vh-0px)] w-2xs bg-blue-400 relative top-0 left-0 flex flex-col justify-between ">
    
<div>
    

   <div className="shrink-0 group block pt-5 mb-5">
  <div className="flex items-center bg-white">
    <img className="inline-block shrink-0 size-15.5 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar"/>
    <div className="ms-3">
      <h3 className="font-semibold text-gray-800 dark:text-white">Mark Wanner</h3>
      <p class="text-sm font-medium text-gray-400 dark:text-neutral-500">mark@gmail.com</p>
    </div>
  </div>
</div>

    <NavLink  to="/admin/dashboard" className=" mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Dashboard
</NavLink>

    <NavLink to="/admin/product" className=" mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Product
</NavLink>

    <NavLink to="/admin/customers" className=" mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Customers
</NavLink>

 <NavLink to="/admin/advertisement" className=" mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Advertisement
</NavLink>

<NavLink to="/admin/dash" className=" mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Advertisement
</NavLink>
</div>
<div>

</div>
<button type="button" class="ml-35 mb-5 w-30 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Logout
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

</button>
  </div>


  )
}
