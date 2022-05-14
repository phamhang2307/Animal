
import Footer from './animal/Footer';
import Header from './animal/Header';
import ImgMain from './animal/ImgMain';
function App(props) {
  const getLocal= localStorage.getItem("login");
  return (
    <div>
      <Header/>
          {/* <ImgMain/> */}
          {props.children}
      <Footer/>
    </div>
  );
}

export default App;
