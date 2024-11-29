// import { Key } from 'lucide-react';
import loginPic from '../assets/reg.svg';
import { NavLink } from 'react-router-dom';


export default function Register() {
    return (
        <>

            <div className="flex flex-col h-screen gap-1 shadow-cyan-600 mt-4 m-[100px] shadow-2xl bg-base-200">
            <div className="flex items-center justify-center h-[100px] sm:h-full  lg:order-first md:h-screen bg-base-300">
                    <img src={loginPic} alt="no pic" />
            </div>
            <div className="flex items-center justify-center sm:order-first md:h-screen ">
                    <form className="card gap-3 place-items-center p-3 rounded-box ">
                        <label className="input input-bordered flex items-center gap-2 w-full w-[500px] ">
                            <input type="text" className="grow" placeholder="First Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full w-[500px] ">
                            <input type="text" className="grow" placeholder="Last Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full w-[500px] ">
                            <input type="password" className="grow" placeholder="Phone" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full w-[500px] ">
                            <input type="password" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full w-[500px]">
                            <input type="password" className="grow" placeholder="Password" />
                        </label>
                        <button type='submit' className='btn btn-outline btn-info w-[200px]'>Register</button>
                        <p>  Already have an account😊? </p>
                        <NavLink to="/login"> 
                        <button type='submit' className='btn btn-outline btn-info w-[200px]'>Login</button>
                        </NavLink>
                    </form>
                </div>
            </div>

        </>
    );
}  