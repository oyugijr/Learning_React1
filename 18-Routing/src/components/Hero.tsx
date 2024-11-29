import heroImg from '../assets/hero.png';
import { NavLink } from 'react-router-dom';
export default function Hero() {
    return (
        <div className="hero h-fit bg-base-200 mb-20">
          <div className="hero-content grid md:grid-cols-2 sm:gap-5">
            <div>
              <h1 className="text-5xl font-bold">Want to Read Some PDFs?</h1>
              <p className="py-6">
                Discover a world of knowledge with our extensive collection of PDFs. Whether you're looking for educational material, fiction, or technical documents, we've got you covered. Enjoy seamless access, intuitive navigation, and personalized reading experiences all in one place.
              </p>
              <NavLink to="/login"> 
                              <button type='submit' className='btn bg-info text-black btn-outline  w-[200px]'>Login</button>
              </NavLink>
            </div>
            <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      );
      
}

