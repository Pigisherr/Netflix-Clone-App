import React from "react";

const SignUp1 = () => {
  
  const FrontPageNavbar = () => {
    return (
      <div className='flex justify-between items-center'>
        <img className='p-[2rem] h-[8rem]' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt="Netflix Logo" />
        <button className='rounded m-[2rem] p-[2rem] justify-center flex bg-red-900'>Sign In</button>
      </div>
    );
  }
  
  const RegisterForm = () => {
    return(<div className="h-screen">
<form>
<p>step one of two</p>
<h1>Create an account to start your membership</h1>
<input type='text' placeholder="username"/>
<input type='text' placeholder="email"/>
<input type='text' placeholder="password"/>


</form>
</div>)
  }
  
  
  const FirstComponent = () => {
    return (
      <div className='bg-black text-white'>
        <FrontPageNavbar />
        <RegisterForm/>
      </div>
    );
  };

  return <FirstComponent />;
}

export default SignUp1;

