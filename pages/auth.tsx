import { useState } from "react";
import Input from "@/components/Input";



const Auth = () => {
   const [email, setEmail] = useState('')
  return (
    <div className="h-full w-full relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full lg:bg-opacity-50">

        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="netflix logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Login</h2>
            <div className="flex flex-col gap-4">
                <Input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                id="email"
                label="email"
                
                />
            </div>
            </div>
      </div>
    </div>
    </div>
  );
}


export default Auth