import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../components/context/context'

const Add = () => {
    const context = useContext(Context)
    console.log(context)
    const { product, setProduct, AddProduct } = context
    return (
        <div className="">
            <div className='flex h-screen justify-center items-center'>
                <div className="w-80 bg-gray-800 lg:w-96 p-8 rounded-xl">
                    <Link to={'/'} className='text-left font-bold bg-slate-500 rounded p-2'>X</Link>
                    <h2 className='text-gray-300 text-center font-bold font-serif'>
                        Add Product
                    </h2>

                    <form onSubmit={AddProduct}>
                        <div className="flex flex-col gap-1">
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Title</label>
                                <input type="text" value={product.title}
                                    onChange={(e) => setProduct({ ...product, title: e.target.value })}

                                    className='rounded-lg outline-none bg-gray-400 text-white py-2 px-3 w-80' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Price</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                    value={product.price} className='rounded-lg outline-none bg-gray-400 text-white py-2 px-3 w-80' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Image URL</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, imageURL: e.target.value })}
                                    value={product.imageURL} className='rounded-lg outline-none bg-gray-400 text-white py-2 px-3 w-80' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Category</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                    value={product.category} className='rounded-lg outline-none bg-gray-400 text-white py-2 px-3 w-80' />
                            </div>
                        </div>
                        <button type="submit" className='px-3 py-2 text-center text-white bg-blue-400 rounded m-5 mx-auto w-1/2'>
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add