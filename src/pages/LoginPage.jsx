import React, { useState } from 'react';
import background from '../assets/login-bg.png';
import facebook from '../assets/facebook.png';
import { motion } from 'framer-motion'; 
import google from '../assets/google.png';
export default function LoginPage({ setloginsignup, loginsignup }) {

    const [mode, setMode] = useState('signup'); // 'signup' or 'login'

    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-[90%] max-w-[736px] rounded-lg shadow-lg overflow-hidden relative"
        >
            <div className="bg-white w-full h-full rounded-lg shadow-lg overflow-hidden relative">

                {/* Top Banner */}
                <div className="text-center py-3 border-b border-gray-200 bg-[#EFFFF4]">
                    <p className="text-[#008A45] text-sm font-medium">
                        Let’s learn, share & inspire each other with our passion for computer engineering.
                        <span className="text-[#008A45] font-semibold ml-1 cursor-pointer">Sign up now ✌️</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row p-6 gap-4">
                    {/* Left Form */}
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-2xl font-semibold mb-4">
                            {mode === 'signup' ? 'Create Account' : 'Sign In'}
                        </h2>

                        <form className="space-y-3">
                            {mode === 'signup' && (
                                <div className="flex gap-2">
                                    <input type="text" placeholder="First Name" className="w-1/2 border px-3 py-2 rounded text-sm" />
                                    <input type="text" placeholder="Last Name" className="w-1/2 border px-3 py-2 rounded text-sm" />
                                </div>
                            )}

                            <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded text-sm" />

                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full border px-3 py-2 rounded text-sm pr-10"
                                />
                                {/* <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"></span> */}
                            </div>

                            {mode === 'signup' && (
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full border px-3 py-2 rounded text-sm"
                                />
                            )}

                            <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium">
                                {mode === 'signup' ? 'Create Account' : 'Sign In'}
                            </button>

                            {/* Social logins */}
                            <button className="w-full border flex items-center justify-center py-2 rounded gap-2 text-sm font-medium">
                                <img src={facebook} className="h-5 w-5" alt="fb" />
                                {mode === 'signup' ? 'Sign up with Facebook' : 'Sign in with Facebook'}
                            </button>

                            <button className="w-full border flex items-center justify-center py-2 rounded gap-2 text-sm font-medium">
                                <img src={google} className="h-5 w-5" alt="google" />
                                {mode === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}
                            </button>

                            {mode === 'login' && (
                                <p className="text-sm text-center text-blue-600 cursor-pointer mt-2">Forgot Password?</p>
                            )}
                        </form>
                    </div>

                    {/* Right Image + Toggle */}
                    <div className="md:w-1/2 w-full flex flex-col items-center justify-between">
                        <div className="text-sm ml-auto text-gray-600 mb-4">
                            {mode === 'signup' ? (
                                <>
                                    Already have an account?{' '}
                                    <span className="text-blue-600 font-medium cursor-pointer" onClick={() => setMode('login')}>
                                        Sign In
                                    </span>
                                </>
                            ) : (
                                <>
                                    Don’t have an account yet?{' '}
                                    <span className="text-blue-600 font-medium cursor-pointer" onClick={() => setMode('signup')}>
                                        Create new for free!
                                    </span>
                                </>
                            )}
                        </div>
                        <img
                            src={background}
                            alt="illustration"
                            className="w-[200px] object-contain mb-auto mt-auto hidden lg:block md:block"
                        />
                    </div>
                </div>

                {/* Close button (optional) */}
                <button
                    onClick={() => setloginsignup(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl font-bold">&times;</button>
            </div>
        </motion.div>
    );
}
