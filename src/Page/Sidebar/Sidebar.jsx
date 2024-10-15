import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
            <div className='space-y-5 h-full'>
                <div className='flex justify-center'>
                    <Avatar sx={{width:'8rem', height:'8rem'}} 
                    className='border-2 border-[#c24dd0]'
                    src='https://picsum.photos/id/159/367/267'/>
                </div>
            </div>
    </div>
  )
}

export default Sidebar