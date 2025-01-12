'use client'

import {FaUserCircle} from "react-icons/fa";
import {useState} from "react";

const UserNavigation = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='relative'>
            <FaUserCircle
                className='text-2xl sm:text-3xl cursor-pointer'
                onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                }}
            />
            {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10'>
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Sign Up
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Log In
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserNavigation;