/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import login_bg from "../assets/login_bg.jpg";
import cinema from "../assets/cinema.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const LoginPage = () => {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className="w-full h-full relative ">
      <img src={login_bg} className=" w-full h-screen object-cover " />

      <div className="w-full h-full absolute top-0 left-0 bg-white/20 backdrop-blur-sm ">
        <div className="w-full h-full flex justify-center items-center ">
          <div className=" w-[30%] bg-white rounded-xl pb-10 p-4 px-10 ">
            <div className=" flex items-center justify-center gap-x-2 ">
              <img src={cinema} className=" size-8 mb-2 object-cover " />
              <h1 className="text-[1.50rem] cursor-pointer text-black font-semibold">
                <span
                  className={" font-extrabold text-[2.5rem] text-indigo-400 "}
                >
                  M
                </span>
                ovieLuxe
              </h1>
            </div>

            <h1 className=" text-[2rem] py-4 font-bold ">
              {isSigned ? "Sign in" : "Sign up"}
            </h1>

            <div className=" space-y-4 ">
              {!isSigned && (
                <CustomInput placeholder="Name" type="text" isUser={true} />
              )}

              <CustomInput placeholder="Email" type="email" isEmail={true} />

              <CustomInput
                placeholder="Password"
                type="password"
                isPassword={true}
              />

              {!isSigned && (
                <CustomInput
                  placeholder="Confirm Password"
                  type="password"
                  isPassword={true}
                />
              )}

              <div className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-md peer peer-checked:bg-[#000] border-[#818CF8]"
                />
                <label>Remember me</label>
              </div>

              <CustomButton title={isSigned ? "Sign in" : "Sign up"} />
            </div>

            {isSigned ? (
              <p className=" text-[1rem] mt-3 text-center ">
                New to MovieLuxe?{" "}
                <span
                  className=" text-[#818cf8] underline cursor-pointer "
                  onClick={() => setIsSigned((prev) => !prev)}
                >
                  signup
                </span>{" "}
              </p>
            ) : (
              <p className=" text-[1rem] mt-3 text-center ">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSigned((prev) => !prev)}
                  className=" text-[#818cf8] underline cursor-pointer "
                >
                  signin
                </span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
