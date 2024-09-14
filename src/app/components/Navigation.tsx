import Link from 'next/link';

 
 function Navigation() {
  return (

    <div className={"text-center grid gird-cols-12  text-neutral-800 txt-lg"} >
      <ul className='w-11/12 mx-auto bg-neutral-950   p-5 flex justify-around shadow-lg'>
      <li><Link href="/" className='text-neutral-200'> Home</Link></li>
        <li><Link href="./pages/about" className='text-neutral-200'> About</Link></li>
         <li><Link href="./pages/contact" className='text-neutral-200'> Contact</Link></li>
          <li><Link href="./pages/portfolio" className='text-neutral-200'> Portfolio</Link></li>
      </ul>
    </div>
  );
}
 
export default Navigation;