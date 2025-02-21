import pfp from "../assets/A1.avif"
import {TypeAnimation} from "react-type-animation"

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col lg:flex-row justify-between items-center bg-slate-100 p-5">
      <div className=" flex flex-col justify-center items-center w-1/2 mt-10">
        <div className="text-lg font-bold">Sameeksha</div> 
        <div className="uppercase lg:text-4xl text-xl font-semibold"><span>I am a </span>
        <TypeAnimation sequence={["Developer",2000, "Designer",2000]} speed={50} className="text-rose-600" wrapper="span" repeat={Infinity}/>
      </div>
      </div>
      <div className="flex justify-center items-center w-1/2 mt-10"><img className="object-cover rounded-xl " src={pfp} alt="#" /></div>
    </div>
  )
}

export default Hero