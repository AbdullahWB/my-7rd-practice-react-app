import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className=''>
                <div className="card flex-shrink-0 h-full w-full max-w-sm shadow-2xl shadow-[#ff990063] bg-base-100 p-12">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Login</h1>
                    <div className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <h2 className='text-[15px] mt-4'>New to Ema-john? 
                                <span className='text-primary'>
                                    <Link to="/singUp">Create New Account</Link>
                                </span>
                            </h2>
                            <div className='flex mt-4'>
                                <div className='mt-3 w-[40%] h-[2px] bg-gray-400'></div>
                                <div className='mx-auto'>
                                    <p>or</p>
                                </div>
                                <div className='mt-3 ml-auto w-[40%] h-[2px] bg-gray-400'></div>
                            </div>
                            <div className='flex border-2 rounded-lg p-2 mt-4'>
                                <img 
                                 className='ml-5' src="https://i.ibb.co/LhPDfMr/google.png" alt="" />
                                <p className='mt-1 ml-2'>Continue with Google</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;