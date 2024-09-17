



async  function Posts() {


    // allowed only in nextjs , in react use (useState+ useEffect())

const response= await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache:'no-cache'
});
 const posts= await response.json()

    return <>
    <article className=''>
       <section>
        <h1>article pages </h1>
        <h5> latest article from us.</h5>
       </section>
       <section>{posts.map((item,id)=>{
        return <div key={id} className='border p-2 mb-2'>
         <h2 className='mb-2'>{item.title}</h2>
         <h5>id: {item.id}</h5>
         <p>{item.body}</p>

        </div>
       })}</section>
    </article>
    
    </>
}

export default Posts;