"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error('Login Failed!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }

        if (res) {
            toast.success('Login Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", 
        });

        console.log(data, "data")
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-[#F3F3F3] p-4 font-sans'>
            <div className='w-full max-w-150 bg-white p-10 md:p-16 rounded-sm shadow-sm'>

                <h2 className='font-semibold text-3xl text-[#403F3F] text-center mb-8'>
                    Login your account
                </h2>

                <hr className='mb-8 border-t border-[#E7E7E7]' />

                <form className='space-y-6' onSubmit={handleSubmit(handleLoginFunc)}>

                    {/* Email Field */}
                    <fieldset className="fieldset">
                        <label className="font-semibold text-lg text-[#403F3F]">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="bg-[#F3F3F3] border-none outline-none p-4 rounded-md w-full placeholder:text-[#9F9F9F]"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })}
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
                    
                 <button 
    type="button" 
    onClick={handleGoogleSignin}
    className="flex gap-3 justify-center items-center w-full border border-gray-300 bg-white text-gray-700 font-medium py-3 rounded-md hover:bg-gray-300 transition-all hover:text-blue mt-4 text-lg shadow-sm"
>
    <FaGoogle className="text-xl text-[#DB4437] " /> 
    <span>Continue with Google</span>
</button>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#18B273] text-white font-semibold py-4 rounded-md hover:bg-[#3edf9c] transition-all mt-4 text-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Text */}
                <p className='mt-8 text-center font-semibold text-[#706F6F]'>
                    Don't Have An Account ?{" "}
                    <Link href={"/register"} className='text-[#F75B5F] hover:underline'>
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;