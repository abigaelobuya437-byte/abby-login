

function App() {
  

  return (
    
      <div className="min-h-screen flex items-center bg-gradient-to-r from-purple-500 to-pink-500 p-6">
     {/*Left section*/}
      <div className="w-full max-w-5*1 bg-white rounded-2*1 shadow-2*1 overflow-hidden flex">
      <div className=" justify-center p-12 hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-500 via-pink-to-orange-400 flex-col justify-center">
        <h1 className="font-bold">Welcome to website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          maggna aliquuam eratvolupat.
        </p>

      </div>
      {/*Right section*/}
      <div className="bg-white p-8 flex-col items-center justify-center ">
        <h2 className="text-center text-semibold text-lg text-grey-800">USER LOGIN</h2>
        <form className="space-y-6">
          <div className="">
            <input type="text" 
            placeholder="username"
            className="w-full px-4 py-3 rounded-full bg-grey-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>
          <div>
            <input type="password"
            placeholder="password"
            className="w-full px-4 py-3 rounded-full bg-grey-100 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="flex justify-between utems-center text-sm text-grey-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-purple-600" />
              <span>Remember</span>
              </label>
              <a href="#" className="hover:text-purple-600">
                Forgot password
                </a>
            
            
          </div>
          <div>
            <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to pink-500 text-black font-semibold hover:opacity-90 transition duration-300" 
            >
            LOGIN
            </button>
          </div>




        </form>



      </div>







      </div>
    </div>
  
  )
}

export default App
