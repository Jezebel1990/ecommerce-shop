import React, {useContext} from 'react'

import { Link } from 'react-router-dom';

 import { BsEyeFill, BsBagPlusFill } from 'react-icons/bs';


 import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
 
const { id, image, category, title, price } = product;
return (

  <div>
<div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
  <div className='w-full h-full flex justify-center items-center'>
<div className='w-[200] mx-auto flex
justify-center items-center'>
  <img className='max-h-[160px] group-hover:scale-150 transition duration-300' src={image} alt='' />
  </div>
</div>

<div className='absolute top-6 right-11
group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0
group-hover:opacity-100 transition-all duration-300'>
  
  <button  onClick={() => addToCart(product, id)}>
    <div className='flex justify-center items-center text-white w-12 h-12 bg-orange-600'>
  <BsBagPlusFill  className='text-3xl'/>
    </div>
  </button>
<Link
  to={`/product/${id}`}
  className='w-10 h-10 bg-blue-400 flex justify-center items-center text-white drop-shadow-xl'>
<BsEyeFill />
</Link>
</div>
</div>
 <div>
<div className="text-sm capitalize text-gray-500">{category}</div>
<Link to={`/product/${id}`}>
  <h2 className='font-medium mb-1'>{title}</h2>
</Link>
<div className='font-semibold'>R$ {price}</div>
</div>
</div>

);
};

export default Product;
