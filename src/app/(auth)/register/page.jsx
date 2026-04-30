"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data, "Register data");
        const { name, photoUrl, email, password } = data;
        console.log(name, photoUrl)


        const {data: res, error} = await authClient.signUp.email({
             name: data.name, // required
             email: data.email, // required
             password: data.password, // required
             image: data.photoUrl,
             callbackURL: "/",
        })

        console.log(res, error,);

        if (error) {
       toast.error('Registration Failed!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
        }

        if (res) {
        toast.success('Registration Successful!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
        }

        
    };

    return (

        <div className='min-h-screen flex justify-center items-center bg-[#F3F3F3] p-4 font-sans'>

            <div className='w-full max-w-150 bg-white p-10 md:p-16 rounded-sm shadow-sm'>
                
                <h2 className='font-semibold text-3xl text-[#403F3F] text-center mb-8'>
                    Register your account
                </h2>


                <hr className='mb-8 border-t border-[#E7E7E7]' />

                <form className='space-y-6' onSubmit={handleSubmit(handleRegisterFunc)}>
                    
                    {/* Email Field */}
                    <fieldset className="fieldset">
                        <label className="font-semibold text-lg text-[#403F3F]">
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            className="bg-[#F3F3F3] border-none outline-none p-4 rounded-md w-full placeholder:text-[#9F9F9F]" 
                            placeholder="Enter your name" 
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
                        )}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="font-semibold text-lg text-[#403F3F]">
                            Photo URL
                        </label>
                        <input 
                            type="text" 
                            className="bg-[#F3F3F3] border-none outline-none p-4 rounded-md w-full placeholder:text-[#9F9F9F]" 
                            placeholder="Enter your photo URL" 
                            {...register("photoUrl", { required: "Photo URL is required" })}
                        />
                        {errors.photoUrl && (
                            <p className='text-red-500 text-sm mt-1'>{errors.photoUrl.message}</p>
                        )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="font-semibold text-lg text-[#403F3F]">
                            Email address
                        </label>
                        <input 
                            type="email" 
                            className="bg-[#F3F3F3] border-none outline-none p-4 rounded-md w-full placeholder:text-[#9F9F9F]" 
                            placeholder="Enter your email address" 
                            {...register("email", { 
                                 required: "Email is required",
                                        pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                         message: "Enter a valid email address"
                            }
                            })}
                        />
                        {errors.email && (
                            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                        )}
                    </fieldset>

                    {/* Password Field */}
                    <fieldset className='fieldset'>
                       <label className="font-semibold text-lg text-[#403F3F] block mb-1">
                           Password
                       </label>
                   
                       <div className="flex items-center bg-[#F3F3F3] rounded-md px-4">
                           <input
                               type={isShowPassword ? "text" : "password"}
                               className="p-4 bg-transparent outline-none py-4 w-full placeholder:text-[#9F9F9F]"
                               placeholder=" Enter your password"
                               {...register("password", { required: "Password is required" })}
                           />
                   
                           <span
                               className='mr-2 cursor-pointer text-[#9F9F9F]'
                               onClick={() => setIsShowPassword(!isShowPassword)}
                           >
                               {isShowPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                           </span>
                       </div>
                   
                       {errors.password && (
                           <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>
                       )}
                   </fieldset>

                    {/* Login Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-[#403F3F] text-white font-semibold py-4 rounded-md hover:bg-black transition-all mt-4 text-lg"
                    >
                        Register
                    </button>
                </form>

            
            </div>
        </div>
    );
};

export default RegisterPage;