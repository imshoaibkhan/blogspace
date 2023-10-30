import React from 'react'
import appWriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const Postcards = ({$id, title, featureImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-64  bg-gray-300 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appWriteService.getFilePreview(featureImage)} alt={title} className='rounded-xl h-40' />

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default Postcards