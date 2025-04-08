export function Login() {
  return (
    <div className="absolute w-screen h-screen z-10 flex justify-center items-center p-30 gap-x-20">
      <div className="w-1/2 h-full p-5 relative flex justify-center items-center">
        {/* Nền mờ */}
        <div className="absolute inset-0 bg-gray-400/30 rounded-3xl shadow-2xl backdrop-blur-md"></div>

        {/* Form */}
        <form className="relative z-10 flex flex-col justify-center items-center gap-4 w-3/4 text-white">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-transparent"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-transparent"
          />
          <button className=" text-white p-2 rounded">Login</button>
        </form>
      </div>

      <div className="w-1/2 h-max flex justify-center items-center">
        <h1 className="text-4xl text-white font-mono">
          Feel Free To Use Our Services! WE WAITIG FOR YOUR ORDER!
        </h1>
      </div>
    </div>
  );
}
