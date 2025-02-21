import Img from '../assets/A2.jpg'
import {skills} from '../constants'
import {education} from'../constants'
import { experience } from '../constants'
const AboutMe = () => {
  return (
    <div id="aboutMe"
    className='bg-slate-500 w-screen h-screen flex justify-between'>
      <div className='hidden w-1/2 lg:flex justify-center p-5 ml-48 mt-10'><img className="max-h-1/2 w-auto object-contain rounded-e-3xl" src={Img} alt="#" /></div>
      <div className='w-full flex flex-col p-6 mt-28 mr-8'>
        <div className='text-4xl font-extrabold mb-4'>About Me</div>
        <div><p className='text-xl leading-relaxed text-justify'> A dedicated Computer Science Engineering student driven by a passion for growth and excellence in a
        collaborative setting, committed to tackling challenges and creating a profound impact through work.</p><br/></div>
        <ul className='flex'><span className='font-semibold'>Skills: </span>
        {skills.map((skill,index)=>(
          <li key={index} className='px-2 font-bold text-rose-800 rounded-lg'>{skill}</li>
        ))}
          </ul>
          <ul className='flex flex-col mt-6'><span className='font-semibold'>Education: </span>
        {education.map((edu,index)=>(
          <li key={index} className='px-2 flex ml-4 font-bold text-rose-800 rounded-lg'>{index+1}. {edu.College}- {edu.Degree} ({edu.CGPA})
          </li>
        ))}
          </ul>
          <ul className='flex flex-col mt-6'><span className='font-semibold'>Experience: </span>
        {experience.map((exp,index)=>(
          <li key={index} className='px-2 flex ml-4 font-bold text-rose-800 rounded-lg'>{index+1}. {exp.title}: {exp.Duration}<br/>{exp.Description}
          </li>
        ))}
          </ul>
      </div>
    </div>
  )
}

export default AboutMe