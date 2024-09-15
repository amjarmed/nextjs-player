import style from "../layout.module.css";

export const metadata: Metadata = {
  title: "Posts and blogs ",
  description: "read more about our blog",
};
function PostLayout({children}) {
    
    return <>
    <main className='w-11/12 mx-auto p-5 bg-neutral-50 shadow-md text-neutral-950 font-sans '>
        <p className='text-start bg-slate-50 p-2 w-max border rounded-full shadow-lg text-neutral-400 font-sans'> post layout </p>
        {children}
    </main>
    
    </>
}

export default PostLayout;