/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import login_bg from "../assets/login_bg.jpg";
import cinema from "../assets/cinema.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { signUp, signIn } from "../utils/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isSigned, setIsSigned] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
  
    if (isSigned !== "Sign In") {
     
      if (!name || !email || !password || !confirmPassword) {
        toast.error("Please fill in all fields");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
  
      if (password !== confirmPassword) {
        toast.error("Confirm password does not match Password");
        return;
      }
  
      if (password.length < 8) {
        toast.error("Password should be at least 8 characters long");
        return;
      }
    } else {
      
      if (!email || !password) {
        toast.error("Please enter both email and password");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
    }
  
    try {
      if (isSigned === "Sign In") {
       
        await signIn(email, password);
        
      
      } else {
        
        await signUp(name, email, password);
      }
    } catch (error) {
      
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error("No user found with this email");
          break;
        case 'auth/wrong-password':
          toast.error("Incorrect password");
          break;
        case 'auth/invalid-email':
          toast.error("Invalid email address");
          break;
        default:
          toast.error(error.message || "Authentication failed");
      }
    }
  };
  
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
              {isSigned === "Sign In" ? "Sign in" : "Sign up"}
            </h1>

            <div className=" space-y-4 ">
              {isSigned !== 'Sign In' && (
                <CustomInput
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  isUser={true}
                />
              )}

              <CustomInput
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                isEmail={true}
              />

              <CustomInput
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                isPassword={true}
              />

              {isSigned !== 'Sign In'  && (
                <CustomInput
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
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

              <CustomButton
                title={isSigned === "Sign In" ? "Sign in" : "Sign up"}
                onClick={user_auth}
              />
            </div>

            {isSigned === "Sign In" ? (
              <p className=" text-[1rem] mt-3 text-center ">
                New to MovieLuxe?{" "}
                <span
                  className=" text-[#818cf8] underline cursor-pointer "
                  onClick={() => setIsSigned('Sign Up')}
                >
                  signup
                </span>{" "}
              </p>
            ) : (
              <p className=" text-[1rem] mt-3 text-center ">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSigned('Sign In')}
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
