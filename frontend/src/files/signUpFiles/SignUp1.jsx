import React from "react"



const SignUp1 = () => {
const navigate = useNavigate()
  
  const FrontPageNavbar = () => {
      return (
    <div className='flex justify-between items-center'>
      <img className='p-[2rem] h-[8rem]' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt="Netflix Logo" />
      <button className='rounded m-[2rem] p-[2rem] justify-center flex bg-red-900' onClick={() => navigate("/Login")}>Sign In</button>
    </div>
  );
  }
  
  const RegisterForm = () => {
  return(<div className="h-screen flex items-center justify-center">
<form className="flex flex-col bg-black mb-[10rem] px-12 py-[2rem]">
<p>step one of two</p>
<h1 className="text-3xl mb-2">Create an account to start your membership</h1>
<input className="py-[1rem] pl-2 mb-2" type='text' placeholder="username"/>
<input className="py-[1rem] pl-2 mb-2" type='text' placeholder="email"/>
<input className="py-[1rem] pl-2" type='text' placeholder="password"/>

<button className="mt-[1rem] bg-red-700 hover:bg-red-600  font-semibold py-[2rem] px-[4rem] text-3xl rounded">Create Account</button>
<div>
<input className="mt-4" type="checkbox"/> 
<label className="ml-2">Send me news and deals about Netflix</label>

</div>

</form>
</div>)
  }
  
  
  const FirstComponent = () => {
    return (
      <div style={{
        backgroundImage:
          'url("https://flexsub.shop/content/images/size/w1200/2021/11/1_5lyavS59mazOFnb55Z6znQ.png")',
      }}
      className="text-white bg-cover  bg-no-repeat">
        <FrontPageNavbar />
        <RegisterForm/>
      </div>
    );
  };

  return <FirstComponent />;
}

export default SignUp1;

