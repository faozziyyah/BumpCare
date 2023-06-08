import { Link } from "react-router-dom";
import pageLogo from "../assets/Group 3850.png"
import instaIcon from "../assets/Group 3860.png"
import fbIcon from "../assets/Group 3861.png"

export default function Footer() {
  return (
    <div className="footer bg-primaryPink">
        <div className="flex flex-row justify-between py-6 px-20">
            <Link to={'/'}  className=''>
                <img src={pageLogo} alt="logo" />
            </Link>
            <div className="flex flex-row gap-4 justify-between items-center">
                <Link to={'/'}  className=''>
                    <img src={instaIcon} alt="logo" />
                </Link>
                <Link to={'/'}  className=''>
                <img src={fbIcon} alt="logo" />
            </Link>
            </div>
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="flex flex-row justify-between py-6 px-20">
            <div className="flex flex-col gap-4">
                <h4>Other Information</h4>
                <ul className="flex flex-col gap-4">
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h3>Features</h3>
                    <ul className="flex flex-col gap-4">
                        <li>Pregnancy</li>
                        <li>Gynecologist</li>
                        <li>Child Birth</li>
                        <li>Baby Care</li>
                        <li>Community</li>
                    </ul>
            </div>
            <div className="w-2/5 flex flex-col gap-4">
                <h3>Search Website</h3>
                <p>Need a quick find? Use the search bar</p>
                <form action="" className="flex mt-4">
                    <input type="search" placeholder="Search... " className="block p-1 w-1/2 submit"/>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg> */}

                </form>
            </div>
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="flex py-10 px-20 justify-center">
            <p>&#169; 2023 BumpCare.com. All Right Reserved</p>
        </div>
    </div>
  )
}
