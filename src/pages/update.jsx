import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../components/context/context'

const Update = () => {
    const context = useContext(Context)
    console.log(context)
    const { product, setProduct, updateProduct } = context
    return (
        <div className="">
            <div className='flex h-screen justify-center items-center'>
                <div className=" bg-gray-800 lg:w-1/2 p-8 rounded-xl">
                    <Link to={'/'} className='text-left font-bold bg-slate-500 rounded p-2'>X</Link>
                    <h2 className='text-gray-300 text-center font-bold font-serif'>
                        Update Product
                    </h2>

                    <form onSubmit={updateProduct}>
                        <div className="flex flex-col gap-1">
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Title</label>
                                <input type="text" value={product.title}
                                    onChange={(e) => setProduct({ ...product, title: e.target.value })}

                                    className='w-full rounded-lg outline-none bg-gray-400 text-white py-2 px-3 ' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Price</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                    value={product.price} className='w-full rounded-lg outline-none bg-gray-400 text-white py-2 px-3 ' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Image URL</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, imageURL: e.target.value })}
                                    value={product.imageURL} className='w-full rounded-lg outline-none bg-gray-400 text-white py-2 px-3 ' />
                            </div>
                            <div className="">
                                <label className='text-left text-gray-300 font-semibold'>Category</label>
                                <input type="text"
                                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                    value={product.category} className='w-full rounded-lg outline-none bg-gray-400 text-white py-2 px-3 ' />
                            </div>
                        </div>
                        <button type="submit" className='px-3 py-2 text-center text-gray-800 font-semibold bg-yellow-400 rounded m-5 mx-auto w-52'>
                            Update Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update