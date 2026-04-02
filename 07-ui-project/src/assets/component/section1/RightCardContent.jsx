import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-bold text-lg'>
        {props.id + 1}
      </h2>
      
      <div>
        <p className='drop-shadow-lg text-lg leading-normal text-white mb-14 font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure dolor perferendis quo animi, inventore architecto eos nesciunt laudantium ipsam!
        </p>
        
        <div className='flex justify-between items-center'>
          <button 
            style={{backgroundColor: props.color}} 
            className='text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow'
          >
            {props.tag}
          </button>
          <button 
            style={{backgroundColor: props.color}} 
            className='text-white font-medium py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow'
          >
            <i className='ri-arrow-right-line'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
