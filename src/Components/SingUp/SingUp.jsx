import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [error, setError] = useState('')
    const handleSingUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value 
        const password = form.password.value
        const confirm = form.confirm.value

        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('password must be at least 6 characters')
            return
        }else if (password !== confirm) {
            setError('your password is not match')
            return
        } 
    }
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className=''>
            <div className="card flex-shrink-0 h-full w-full max-w-sm shadow-2xl shadow-[#ff990063] bg-base-100 p-12">
                <h1 className='text-center text-2xl font-semibold mb-5'>SingUp</h1>
                <form onSubmit={handleSingUp} className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                            <p className='text-red-500'>{error}</p> 
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SingUp</button>
                        <h2 className='text-[15px] mt-4'>Already have an account?
                            <span className='text-primary'>
                                <Link to="/login">Login</Link>
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

                </form>
            </div>
        </div>
    </div>
    );
};

export default SingUp;