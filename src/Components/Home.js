import React from 'react'
import { getProducts } from '../Data/Data'
// import {AiFillStar} from 'react-icons/ai'
const Home = () => {
  const products=getProducts();
  return (
    <div>
  <ul className="grid grid-cols-3 gap-5 p-4">
    {products.map((product) => (
      <li key={product.id} className="card border-1 bg-slate-400 p-4">
        <div className="p-3 w-full h-60 overflow-hidden bg-slate-300 rounded-md">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-contain rounded-xl" 
          />
        </div>
        <div className="mt-2 text-center">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-500">Price: ₹{product.price}</p>
          <button className="bg-blue-200 border-black border-1 p-2 m-2 rounded-xl hover:bg-blue-500">
            Add to cart
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

        
       

   
  )
}

export default Home
