import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo.js'
import MenuBar from './components/MenuBar';
import ContentWindow from './components/ContentWindow';

import logo_img from './assets/image0.gif'

function App() {
  const menuList = [
    'music',
    'company',
    'skaters',
    'videos',
  ]

  return (
    <div className="App">
        
        {/* <Logo img_src={logo_img}></Logo> */}
        <MenuBar menuList={menuList} ></MenuBar>  
        <ContentWindow></ContentWindow>
    </div>
  );
}

export default App;
