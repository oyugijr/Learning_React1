import { NavLink } from "react-router-dom"
export default function JoinUs() {
    return (
        <div className="hero h-fit bg-base-200 mb-20 md:mt-[5rem] ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Why should you join us ?</h1>
                    <p className="py-6">Eazy Read is free all you need is an account to get started.</p>
                    <NavLink to="/register"> 
                              <button type='submit' className='btn bg-info text-base-200 btn-info w-[200px]'>Get Started</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

