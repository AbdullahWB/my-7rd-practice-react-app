import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { singIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    console.log(location);
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        singIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate(from , {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className=''>
                <div className="card flex-shrink-0 h-full w-full max-w-sm shadow-2xl shadow-[#ff990063] bg-base-100 p-12">
                    <h1 className='text-center text-2xl font-semibold mb-5'>Login</h1>
                    <form onSubmit={handleLogin} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name='password' required placeholder="password" className="input input-bordered" />
                            <div className='flex'>
                            <p onClick={() => setShow(!show)}><small>
                                {
                                    show ? <span>Hide password</span> : <span>Show password</span>
                            }
                            </small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
                            </label>
                            </div>
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

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;