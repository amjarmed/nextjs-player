
import Counter from './components/Counter';
import Todo from './components/todos';

 
 function Home() {
  return (

    <div className={" container "} >

  <div className='p-3 my-5    mt-5'>

    <hr/>

      <Counter/>

  </div>
    </div>
  );
}
 
export default Home