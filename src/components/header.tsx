// import React from 'react'
import Link from "next/link"

const Header = ()=> {
  return (
    <div className = "   flex justify-center  bg-red-500 text-white font-bold  h-10 w-full  ">
       <ul className = " flex justify-center  items-center  gap-12">
       <li><Link href="/">Home</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/signup">SignUp</Link></li>
        <li><Link href="/contact">Contact me</Link></li>
      </ul>
    </div>
  );
}

export default Header