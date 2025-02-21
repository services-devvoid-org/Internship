import {work} from '../constants'

const Work = () => {
  return (
    <div id="work" className='bg-slate-100 w-screen h-screen flex flex-col items-center'>
      <div className='text-4xl font-extrabold m-5'>Work</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 ml-10'>{work.map((work,index)=>(
        <div key={index} className='bg-slate-900 bg-opacity-30 px-10 py-4 rounded-lg hover:scale-105 flex flex-col'>
        <h4 className='text-xl font-bold text-center text-rose-700 mb-5'>{work.title}</h4>
        <p className='text-justify text-lg flex-wrap mb-6'>{work.description}</p>
        <ul><h4 className='font-semibold text-rose-700'>Tools and Languages:</h4><div className='flex flex-row gap-3'>{work.Tools.map((tool,index)=>(<li key={index}>{tool}</li>))}</div></ul>
        </div> ))}
        </div>
    </div>
  )
}

export default Work