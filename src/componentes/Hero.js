import React from 'react'

import CoupleImg from '../img/happy-couple.png';

import { Link } from 'react-router-dom';


const Hero = () => {
  return (
  <section className='bg-blue-400 h-[800px] bg-hero bg-no-repeat- bg-cover bg-center py-24'>
<div className='container mx-auto flex justify-around h-full'>

<div className='flex flex-col justify-center'>
<div className='font-semibold flex items-center uppercase'>
<div className='w-10 h-[2px] bg-orange-600 mr-3'></div>
Novidades
</div>
<h1 className='text-[70px] leading-[1.1] font-light mb-4'>
LIQUIDAÇÃO <br/>
<span className='font-semibold'>MODA OUTONO</span>
</h1>
<Link 
  to={'/'}
  className='self-start uppercase font-semibold text-blue-800  border-b-2
  border-blue-800'
>
Saiba mais
</Link>
</div>

{/* image */}
<div className='hidden w-[700px]  lg:block'>
  <img src={CoupleImg} alt='' />
  </div>
</div>
</section>
  );
};
export default Hero;