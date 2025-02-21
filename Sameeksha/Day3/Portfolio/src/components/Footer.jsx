import {socials} from '../constants'

const Footer = () => {
  return (
    <div className='flex justify-between p-4'>
      <h4 className='text-rose-700 font-semibold'>Sameeksha</h4>
      <h4 className='text-rose-700 font-semibold'>Made by Sameeksha</h4>
      <ul className='flex gap-2 w-12 m-2'>{socials.map((social,index)=>(<li><a href={social.href}>{social.logo}</a></li>))}</ul>
    </div>
  )
}

export default Footer