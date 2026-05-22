import React from 'react'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongItems = (props) => {
  const {playwithId} = useContext(PlayerContext);
  return (
    <div onClick={() => playwithId(props.id)} className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded min-w-[155px] max-h-[180px]' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className='text-sm text-slate-200'>{props.desc}</p>


    </div>
  )
}

export default SongItems