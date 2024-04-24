import React from "react";
import "../index.css"

const Frontpage = () => {
  
  const FrontPageNavbar = () => {
    return (<div className='flex justify-between items-center'><img className='p-[2rem] h-[8rem] ' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'></img>
    <button className='rounded m-[2rem] p-[2rem] justify-center flex  bg-red-900'>Sign In</button>
    </div>)
  }
  
  
  const LoginForm = () => {
    return (
      <form className="flex flex-col justify-center items-center w-[20rem]">
    <div className="flex flex-col justify-center items-center max-w-[20rem]">
     <input type="username" placeholder="username"/>
     <input type="email" placeholder="email"/>
     <input type="password" placeholder="password"/>
      </div>
      
      <button className="w-[20rem] rounded-md bg-red-500 w-full">Log In</button>
   
      </form>
    )
  }
  
  
return <div className='bg-black text-white'>

<FrontPageNavbar/> 
<LoginForm/>
</div>;
};

export default Frontpage;
