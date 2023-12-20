import { useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
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
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                id="name"
                label="Username"
              />

              <Input
                type="email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                label="Email"
              />

              <Input
                type="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                label="Password"
              />

              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                Login
              </button>
              
              <p className="text-neutral-500 mt-12">
                First time using Netflix?
                <span className="text-white ml-1 hover:underline cursor-pointer">
                    Create and account

                </span>

              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
