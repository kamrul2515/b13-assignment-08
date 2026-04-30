"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import userAvatar from "@/assets/user.png";
import { FaUserEdit, FaEnvelope, FaIdBadge, FaThLarge } from 'react-icons/fa';

const MyProtfolio = () => {
    const { data: session, isPending } = authClient.useSession();
    const [pageLoading, setPageLoading] = useState(true);
    const user = session?.user;

    useEffect(() => {
        document.title = "B-Tiles Best My Protfolio";
    }, []);

    useEffect(() => {
        if (!isPending) {
            const timer = setTimeout(() => {
                setPageLoading(false);
            }, 800); 
            return () => clearTimeout(timer);
        }
    }, [isPending]);

    if (pageLoading || isPending) {
        return (
            <div className="fixed inset-0 z-100 flex flex-col justify-center items-center bg-white">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-[#18B273]/20 border-t-[#18B273] rounded-full animate-spin"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#1B3B6F] rounded-full animate-pulse"></div>
                </div>
                <h2 className="mt-6 text-[#1B3B6F] font-bold tracking-[0.2em] uppercase text-sm animate-pulse">
                    Loading Profile
                </h2>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-xl font-semibold text-gray-800">Please login to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 animate-in fade-in duration-700">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="h-32 bg-[#1B3B6F]"></div>
                    <div className="px-8 pb-8">
                        <div className="relative -mt-16 mb-6 flex justify-between items-end">
                            <div className="p-1 bg-white rounded-full shadow-md">
                                <Image 
                                    src={user.image || userAvatar} 
                                    alt="Profile" 
                                    width={120} 
                                    height={120} 
                                    className="rounded-full border-4 border-white object-cover h-30 w-30"
                                />
                            </div>
                            <button className="flex items-center gap-2 bg-[#18B273] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#159a63] transition-all mb-2 shadow-sm">
                                <FaUserEdit /> Edit Profile
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                                <p className="text-gray-500 flex items-center gap-2 mt-1">
                                    <FaEnvelope className="text-[#18B273]" /> {user.email}
                                </p>
                            </div>
                            <div className="flex md:justify-end gap-4">
                                <div className="text-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Role</p>
                                    <p className="font-semibold text-[#1B3B6F] uppercase">{user.role || 'User'}</p>
                                </div>
                                <div className="text-center px-4 py-2 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Status</p>
                                    <p className="font-semibold text-green-600">Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#1B3B6F] mb-4 text-xl">
                            <FaThLarge />
                        </div>
                        <h3 className="text-gray-500 font-medium">My Tiles</h3>
                        <p className="text-2xl font-bold text-gray-800">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#18B273] mb-4 text-xl">
                            <FaIdBadge />
                        </div>
                        <h3 className="text-gray-500 font-medium">Verified Status</h3>
                        <p className="text-2xl font-bold text-gray-800">Verified</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-4 text-xl">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-gray-500 font-medium">Account Created</h3>
                        <p className="text-sm font-bold text-gray-800">
                            {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '27/04/2026'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;