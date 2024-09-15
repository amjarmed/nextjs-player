 function ShowArticlePage(props) {
  return (
    <div className="  p-5  ">
        <h1 className='mb-5'>article: Lorem ipsum dolor sit amet</h1>
        <h5 className='mb-5 text-neutral-600' > descreption: {props.params.title}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti eius incidunt cumque impedit sed, optio quia quasi excepturi rem natus ex repudiandae animi, cupiditate sunt odit libero porro voluptatum?</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti eius incidunt cumque impedit sed, optio quia quasi excepturi rem natus ex repudiandae animi, cupiditate sunt odit libero porro voluptatum?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti eius incidunt cumque impedit sed, optio quia quasi excepturi rem natus ex repudiandae animi, cupiditate sunt odit libero porro voluptatum?</p>
    </div>
  );
}
 
export default ShowArticlePage