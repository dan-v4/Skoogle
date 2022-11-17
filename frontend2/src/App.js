import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo.js'
import ContentWindow from './components/ContentWindow';
import MenuBarHolder from './components/MenuBarHolder';
import logo_img from './assets/image0.gif'
// Michael's imports (backend)
import axios from 'axios';
import {useEffect, useState} from 'react' //runs function when page renders






function App() {



  const menuList = [
    'music',
    'company',
    'skaters',
    'videos',
  ]

  const menuList1 = [
    'company',
    'music',
    'skaters',
    'videos',
  ]

  return (
    <div className="App">

        <MenuBarHolder menuList={menuList} menuList1={menuList1}></MenuBarHolder>
        <ContentWindow></ContentWindow>
    </div>
  );
}

export default App;
