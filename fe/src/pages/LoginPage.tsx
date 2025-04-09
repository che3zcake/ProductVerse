import { useState } from 'react';
// import axios from 'axios';
import {useLoggedIn} from "../contexts/LoggedInContext.ts";
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // @ts-ignore
    const updateLoggedIn = useLoggedIn((state)=>state.updateloggedIn)
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Welcome Back!
                </h1>
                <p className="text-center text-gray-600">
                    Log in to manage your products.
                </p>


                <form onSubmit={()=>console.log('ok')} className="space-y-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-50"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:bg-gray-50"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            onClick={async ()=>{
                                try {
                                    // const result = await axios.post('http://localhost:3000/user/login', {
                                    //     email: email,
                                    //     password: password
                                    // });
                                    //
                                    // const token = result.data.token;
                                    // localStorage.setItem('Authorization', `Bearer ${token}`);
                                    // updateLoggedIn(true)
                                    navigate('/')

                                    console.log('Login successful!');
                                } catch (err) {
                                    console.error('Login failed:', err);
                                }
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;