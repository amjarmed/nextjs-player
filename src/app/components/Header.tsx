type HeaderParams={
  text:string;
  textsub?: string 
}
 function Header({text, textsub}: HeaderParams) {
  return<>
  <div className='p-5 col-span-12  bg-slate-900 mb-2 text-gray-100'> <h1>header</h1>
  <h2>{text}</h2>
  <h3>{textsub}</h3>
  </div>
  
  </>
 }

 export default Header