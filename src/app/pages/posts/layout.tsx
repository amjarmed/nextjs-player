import style from "../layout.module.css";


export const metadata: Metadata = {
  title: "Posts and blogs ",
  description: "read more about our blog",
};
function PostLayout({children}) {
    
    return <>
    <main className='flex-grow mx-auto  0  text-neutral-700 font-sans  '>
       <div className="container">
         <p className='text-center bg-neutral-950 p-2 w-full  shadow-lg text-neutral-100 font-sans'> post layout  </p>
        <div className="content bg-neutral-50 shadow-md p-2 md:p-5">
          {children}
        </div>
       </div>
    </main>
    
    </>
}

export default PostLayout;