import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from './context/context'
import Cards from './Cards'

const ProductTable = () => {
    const context = useContext(Context)
    const { allProducts, delProduct, updateProducthandle, search, setSearch } = context

    const filteredProduct = allProducts.filter((obj) => obj.title.toLowerCase().includes(search))
    return (
        <div className=''>
            <Link to={'/add'} className="fixed h-20 w-20 bottom-5 right-5">
                <img src="https://cdn-icons-png.flaticon.com/512/7887/7887095.png" alt="" />
            </Link>
            <div className="flex justify-center h-full">
                <div className="container mx-auto   sm:w-3/4 bg-gray-300 rounded-md">
                    <div className="relative shadow-md sm:rounded-xl">
                        <div className=" bg-gray-500  flex flex-wrap items-center justify-between p-2">
                            <input type="text" className=' lg:w-80 py-1.5 rounded-md px-2 outline-none text-white bg-gray-600 placeholder-gray-300'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search' />

                        </div>
                    </div>
                    <div className=" overflow-x-scroll">
                        <table className='sm:w-full w-auto overflow-x-auto md:w-full lg:w-full text-sm text-center text-gray-500 dark:text-gray-500'>
                            <thead className='sticky top-0 bg-gray-300'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>Sr.No.</th>
                                    <th scope='col' className='px-6 py-3'>image</th>
                                    <th scope='col' className='px-6 py-3'>Name</th>
                                    <th scope='col' className='px-6 py-3'>Price</th>
                                    <th scope='col' className='px-6 py-3'>Category</th>
                                    <th scope='col' className='px-6 py-3'>Date</th>
                                    <th scope='col' className='px-6 py-3'>Action</th>
                                    <th scope='col' className='px-6 py-3'>Action</th>
                                </tr>
                            </thead>
                            {filteredProduct.length > 0 ?
                                filteredProduct.map((product, index) => {
                                    console.log(product)
                                    const { id = { index }, title, price, category, imageURL, date } = product;
                                    return (
                                        <>
                                            <tbody >
                                                <tr key={id} className="bg-gray-700 border-b border-gray-500 text-white">
                                                    <td className="px-6 py-4">1.</td>
                                                    <td className="px-6 py-4 w-40 h-10 md:h-40 lg:h-40">
                                                        <img src={imageURL} alt='image' className='object-cover w-full ' />
                                                    </td>
                                                    <td className="px-6">{title}</td>
                                                    <td className="px-6">₹{price}</td>
                                                    <td className="px-6">{category}</td>
                                                    <td className="px-6">{date}</td>
                                                    <td className="px-6">
                                                        <a href="#"
                                                            onClick={() => delProduct(product)} className='font-medium text-blue-600 px-3 py-1 dark:text-blue-50 rounded-sm hover:underline bg-red-500' >
                                                            Del
                                                        </a>
                                                    </td>
                                                    <td className="px-6">
                                                        <Link to="/update"
                                                            onClick={() => updateProducthandle(product)}
                                                            className='font-medium px-3 py-1 rounded-sm text-black dark:text-dark-300 bg-green-400 hover:underline' >
                                                            Edit
                                                        </Link></td>
                                                </tr>
                                            </tbody>
                                        </>

                                    )
                                })
                                :
                                <tbody>
                                    <tr className="bg-gray-700 border-b border-gray-500 text-white">
                                        <td colSpan={8} className="px-6 py-4">No Product Found</td>
                                    </tr>
                                </tbody>
                            }
                        </table>

                    </div>
                </div>
            </div>
            <div className="container my-9 mx-auto w-full lg:w-3/4">
                <h2 className='text-4xl text-center text-red-500 font-semibold'>Products</h2>

                <div className="flex justify-between items-center">

                    {filteredProduct.length > 0 ?
                        filteredProduct.map((product, index) => {
                            console.log(product)
                            const { id = { index }, title, price, category, imageURL, date } = product;
                            return (

                                <Cards
                                    id={id}
                                    title={title}
                                    price={price}
                                    category={category}
                                    imageURL={imageURL}
                                    date={date}
                                    product={product}
                                />

                            )
                        })
                        :
                        <div className=" bg-slate-500 mx-auto w-3/4 p-5">
                            <p className="text-red-500 font-bold font-mono text-center">No Product Found</p>
                        </div>
                    }</div>
            </div>
        </div>
    )
}

export default ProductTable