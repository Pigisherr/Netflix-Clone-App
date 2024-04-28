import React from "react"


const Login = () => {
  const LoginNavbar = () => {
    return (
      <img
        className="p-[2rem] h-[8rem] absolute top-0 left-0"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    );
  };

  const LoginForm = () => {
    return (
      <form className="h-screen flex justify-center items-center">
        {/* Center the form horizontally and vertically */}
        <div className="bg-black p-8 rounded-lg">
          <h1 className="text-5xl mb-10">Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="mb-2 w-full pl-2 py-[0.5rem] rounded text-black"
          />
          <input
            type="text"
            placeholder="Email"
            className="mb-2 w-full pl-2 py-[0.5rem] rounded text-black"
          />
          <input
            type="text"
            placeholder="Password"
            className="mb-2 w-full pl-2 py-[0.5rem] rounded text-black"
          />
          <button className="bg-red-700 hover:bg-red-600 text-white font-semibold mt-4 py-4 px-4 rounded w-full">
            Sign In
          </button>
          <div className="flex flex-row justify-between">
            <div>
              <input className="mt-[1rem]" type="checkbox" />
              <span className="ml-1">Remember Me</span>
            </div>
            <a className="mt-[1rem]">forgot password?</a>
          </div>
          <div className="flex flex-row">
            <p>new to Nexflix?</p>
            <a href="/" className="ml-2 underline">
              SignUp now!
            </a>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://flexsub.shop/content/images/size/w1200/2021/11/1_5lyavS59mazOFnb55Z6znQ.png")',
      }}
      className="text-white bg-cover bg-no-repeat flex flex-col justify-center items-center h-screen"
    >
      {/* Center the content vertically and horizontally */}
      <LoginNavbar />
      <LoginForm />
    </div>
  );
};

export default Login;
