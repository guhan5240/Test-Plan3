import { useState } from "react"
import axios  from  "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {

        const usenav=useNavigate();

        const[admin,setAdmin]=useState({
                email:"",
                password:""
        })

        const setValue=(e)=>{
           setAdmin({...admin,[e.target.name]:e.target.value})
        }
        const handleLogin=async(e)=>{
            // e.preventDefault();
            await axios.post("http://localhost:5000/api/auth/login",admin)
             .then(
                (res)=>
                  //  console.log(res.data.token),
                localStorage.setItem("adminToken",res.data.token),
                //console.log(res.data.token),
                usenav("/dashboard")
                    )
              .catch(()=>alert("Wrong email & password"));
        }

  return (
    <div className='min-h-[calc(100vh-0px)]  bg-purple-50 flex justify-center items-center'>
        <div className='w-lg h-auto rounded-xl bg-white flex flex-col items-center'>
            <h1 className='text-3xl font-semibold text-blue-700 m-8 mb-10'>Admin Login</h1>
            <form onSubmit={handleLogin}>
            <div className="w-sm space-y-3 ">
                <div className="relative">
                <input type="email" onChange={(e)=>setValue(e)} name="email" className="outline-none peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter name"/>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
  
            </div>
                <div className="relative">
                <input type="password"  onChange={(e)=>setValue(e)} name="password" className="outline-none peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter password"/>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                <circle cx="16.5" cy="7.5" r=".5"></circle>
                </svg>
            </div>
            </div>
            </div>
              <button type="submit" className="m-5 ml-35 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Login
            </button>
            </form>

          

        </div>
    </div> 
)
}
