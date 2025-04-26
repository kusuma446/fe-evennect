'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { deleteCookie } from "cookies-next";
import { onLogout } from "@/lib/redux/features/authSlice";
import { useState } from "react";

export default function Navbar() {
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg">
            {/* Desktop Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="text-2xl font-bold cursor-pointer hover:text-gray-200 transition-colors duration-300">
                                Logo
                            </div>
                        </Link>
                    </div>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {auth.isLogin ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-200">Hello, {auth.user.first_name}</span>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300 transform hover:scale-105"
                                        onClick={() => {
                                            dispatch(onLogout());
                                            deleteCookie("access_token");
                                            router.push("/");
                                        }}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-4">
                                    <button
                                        className=" hover:bg-indigo-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300 transform hover:scale-105"
                                        onClick={() => router.push("/login")}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        className=" hover:bg-indigo-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform duration-300 transform hover:scale-105"
                                        onClick={() => router.push("/register")}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {auth.isLogin ? (
                            <div className="flex flex-col space-y-3 px-3 py-2">
                                <span className="text-gray-200">Hello, {auth.user.first_name}</span>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        dispatch(onLogout());
                                        deleteCookie("access_token");
                                        router.push("/");
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-3 px-3 py-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        router.push("/login");
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Sign In
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full text-center transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        router.push("/register");
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
