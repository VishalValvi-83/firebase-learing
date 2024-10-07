import React, { useContext } from 'react'
import Context from './context/context'
import { Link } from 'react-router-dom'

function Cards({ id, title, price, category, imageURL, date, product }) {
    const context = useContext(Context)
    const { delProduct, updateProducthandle } = context
    return (
        <div key={id} className="card w-1/3 lg:w-2/6 md:w-1/3 bg-slate-600 p-2">
            <div className="h-80 mx-auto w-3/4">
                <img src={imageURL} alt="image" className='object-contain  w-full h-full' />
            </div>
            <div className="card-body mx-auto py-2 px-1 lg:px-3">
                <span className="card-title font-semibold text-3xl text-yellow-400 hover:text-yellow-300">{title}</span>
                <p className="card-text text-2xl text-blue-300">{price}</p>
                <span className='text-gray-400 text-sm'>{date}</span> <span className='text-yellow-300 text-lg lg:ms-44 font-medium'> {category}</span>
            </div>
            <div className="flex justify-end items-center">
                <button onClick={() => delProduct(product)} type="submit" className='py-1 px-2 hover:bg-red-500 text-white bg-red-600 rounded-md w-20  font-medium me-5' >Delete</button>
                <Link to={'/add'} onClick={() => updateProducthandle(product)} type="submit" className='py-1 px-2 text-center hover:bg-green-400 text-white bg-green-500 rounded-md w-20  font-medium' >Edit </Link>
            </div>
        </div>
    )
}

export default Cards
