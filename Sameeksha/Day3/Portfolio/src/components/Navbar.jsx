import {Menu, X} from "lucide-react"
import {navItems} from "../constants"
import {useState} from 'react'
const Navbar = () => {
  const [mobileDarwerOpen, setMobileDarwerOpen]=useState(false);
  const toggleNavbar=()=>{
    setMobileDarwerOpen(!mobileDarwerOpen);
  }
  return (
    <div className='sticky top-0 bg-white w-full flex justify-between py-4 px-6 mb-2'>
        <div className='text-2xl font-bold'>
            Sameeksha
        </div>
        <ul className=' hidden lg:flex gap-4 text-l font-bold'>
            {navItems.map((item,index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
        </ul>
        <div className="lg:hidden justify-end z-20">
          <button onClick={toggleNavbar}>
            {mobileDarwerOpen?<X/>:<Menu></Menu>}
          </button>
        </div>
        {mobileDarwerOpen && (<div className="fixed w-1/2 h-1/2 text-xl top-0 rounded-lg bg-slate-300 bg-opacity-30 right-0 flex flex-col justify-center items-center lg:hidden">
        <ul>{navItems.map((item,index)=>(
          <li className="py-6" key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
    </ul></div>)}

        
            
    </div>
  )
}

export default Navbar