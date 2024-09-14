
import Counter from './components/Counter';
import Navigation from './components/Navigation';

 
 function Home() {
  return (

    <div className={"text-center grid gird-cols-12  text-neutral-900 txt-lg"} >
  <Navigation/>

  <div className='p-3 my-5 border'>
      <Counter/>

  </div>
    </div>
  );
}
 
export default Home