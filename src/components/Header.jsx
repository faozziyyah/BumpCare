import { Link } from "react-router-dom";
import pageLogo from "../assets/Group 3850.png"

export default function Header() {
  return (
    <header className='flex justify-between py-6 px-20'>
        <Link to={'/'}  className=''>
            <img src={pageLogo} alt="logo" />
        </Link>
        <ul className="flex gap-2 py-6 justify-evenly w-2/3">
            <li className=' text-secondaryText'>Pregnancy</li>
            <li className=' text-secondaryText'>Gynecologist</li>
            <li className=' text-secondaryText'>Child Birth</li>
            <li className=' text-secondaryText'>Baby Care</li>
            <li className=' text-secondaryText'>Community</li>   
            <Link to={'/'} className="">
              <button className="flex text-center rounded-lg bg-yellowgold px-6 py-1">Get Started</button>
            </Link>
        </ul>
      </header>
  )
}
