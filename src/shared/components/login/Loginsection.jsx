import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Loginsection = () => {
     const usenav=useNavigate()
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [verify,setVerify]=useState(false)


    const [userData,setUserdata]=useState({})

    const [role, setRole] = useState("user");
    const [user,setUser]=useState({})

  const handleChange = (e) => {
    setRole(e.target.checked ? "Admin" : "user");
  };
    const setuser=(e)=>{
        setUserdata({...userData,[e.target.name]:e.target.value})
    
    }

    const dataHandle=async(e)=>{
            setUser({role,...userData})

         if(role==="Admin"){
        
          //  e.preventDefault();
            await axios.post("http://localhost:5000/api/auth/login",{...userData,role:role})
             .then(
                (res)=>{  //  console.log(res.data.token),
                localStorage.setItem("adminToken",res.data.token),
                //console.log(res.data.token),
                console.log(userData),
                usenav("/dashboard")}
                
                    )
              .catch(()=>alert("Wrong email & password"));
        }
        else if(verify){
                 await axios.post("http://localhost:5000/api/userLogin/verify",userData).then((res)=>{
                    console.log("success")

            }).catch((res)=>{console.log("otp faild")})

        }else{
            setVerify(true);
            console.log("otp go")
            await axios.post("http://localhost:5000/api/userLogin/signup",userData).then((res)=>{

            }).catch((res)=>{console.log("otp faild")})
        }

    }
    return (
        <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
            <div className='flex justify-center mb-4'>
                <h2 className='text-3xl font-semibold text-center'>{isLoginMode ? "Login" : "sign up"}</h2>
            </div>
            <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
                <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white":"text-black"} `}>
                    Login
                </button>
                <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white":"text-black"} `}>
                    Sign Up
                </button>
                <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ?"left-0":"left-1/2"}` }></div>
            </div>

            <form action={dataHandle} className='space-y-4'>
                {!isLoginMode &&(
                    <input type="text" placeholder="name" onChange={(e)=>setuser(e)} name="userName" required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
                )}

                <input type="email" placeholder="email" name="email"  onChange={(e)=>setuser(e)} required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
               {!isLoginMode && (
                 <input type="text" placeholder="number" name="mobile"  onChange={(e)=>setuser(e)} required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400'/>
               )}


               {isLoginMode && (
                <div>
                <input type="password" placeholder='password' name="password"  onChange={(e)=>setuser(e)} required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />

                <div class="flex mt-2">
                 <input type="checkbox" onChange={handleChange} class="shrink-0 mt-0.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox"/>
                    <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Admin</label>
                </div>
                </div>
               )}
                

                {verify && !isLoginMode && (
                    <div>     
                        <input type="text" placeholder='otp' name="code"  onChange={(e)=>setuser(e)} required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        <input type="password" placeholder='password' name='password'  onChange={(e)=>setuser(e)} required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                        <input type="password" placeholder='confirm password' required className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400' />
                    </div>

                )}

                {isLoginMode &&(
                    <div className='text-right'>
                        <p className='text-cyan-600 hover:underline'>Forget password</p>
                    </div>
                )}

                {isLoginMode ?
                    <button type="submit" className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition '>
                    Login
                </button>: !verify?<button  onClick={(e)=>dataHandle(e)} className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition '>
                    verify 
                </button>:<button type="submit" className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition '>sign up</button>
                }
                {/* <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition '>
                    {isLoginMode ?"Login":"sign up"}
                </button> */}

                <p className='text-center text-gray-600'>{isLoginMode ?"Dont't have account" :"alredy have a account"}
                    <a href="#" onClick={(e)=>setIsLoginMode(!isLoginMode)} className='text-cyan-600 hover:underline'>
                        {isLoginMode ? "Signup now":"Login"}
                    </a>
                    </p>
            
            </form>
        </div>
    )
}

export default Loginsection