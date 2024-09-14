import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

 
 function Home() {
  const hideAside= true;
  return (

    <div className="text-center grid gird-cols-12">
     <Header text={'navigation '}   textsub='something new'/>
     <Main/>
     {hideAside && <Aside/>}
     <Footer/>
    </div>
  );
}
 
export default Home