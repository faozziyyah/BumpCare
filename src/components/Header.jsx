import { Link } from "react-router-dom";
import pageLogo from "../assets/Group 3850.png"

export default function Header() {
  return (
    <header className='flex justify-between py-6 px-20'>
        <Link to={'/'}  className=''>
            <img src={pageLogo} alt="logo" />
        </Link>

        <ul className="flex gap-2 py-6 justify-evenly w-2/3">

            <Link to={'/pregnancy'}  className=''>
                <li className='text-secondaryText'>Pregnancy</li>
            </Link>
            <Link to={'/gyneacologist'}  className=''>
                <li className='text-secondaryText'>Gynecologist</li>
            </Link>
            <Link to={'/'}  className=''>
                <li className='text-secondaryText'>Child Birth</li>
            </Link>
            <Link to={'/'}  className=''>
                <li className='text-secondaryText'>Baby Care</li>
            </Link>
            <Link to={'/community'}  className=''>
                <li className='text-secondaryText'>Community</li>
            </Link>            
               
            <Link to={'/register'} className="">
              <button className="flex text-center rounded-lg bg-yellowgold px-6 py-1">Get Started</button>
            </Link>

        </ul>

      </header>
  )
}
