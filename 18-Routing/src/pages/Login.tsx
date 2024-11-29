import loginPic from '../assets/welcome.svg';
import { NavLink } from 'react-router-dom';



export default function Login() {
    return (
        <>
            <div className="grid sm:grid-cols-2 gap-4 h-screen bg-base-200">
                <div className="flex items-center justify-center sm:order-first m-5 p-6">
                    <form className="card gap-6 place-items-center p-6 rounded-box ">
                        <div className="chat chat-end p-3">
                            <div className="chat-bubble w-[300px] bg-blue-600 text-3xl m-6 p-6 ">Welcome Back😉</div>
                        </div>
                        <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                            <input type="text" className="grow" placeholder=" Name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                            <input type="password" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full max-w-xs ">
                            <input type="password" className="grow" placeholder="Password" />
                        </label>
                        <button type='submit' className='btn btn-outline btn-info w-[200px]'>Login</button>
                        
                        <NavLink to="/register"> 
                        <p>  Dont have an account😲? </p>
                        <button type='submit' className='btn btn-outline btn-info w-[200px]'>Register</button>
                        </NavLink>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isActive ? "active" :
                            isPending ? "pending" : isActive ? "active" : ""}>    
                                  🏡 Home                  
                        </NavLink>
                    </form>
                </div>
                <div className="flex items-center justify-center sm:h-full md:h-screen bg-base-300 p-6">
                    <img src={loginPic} alt="nopic" />
                </div>
            </div>

        </>
    );
}  