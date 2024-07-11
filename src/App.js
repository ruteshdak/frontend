// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
// import { getPosts } from './api';
// import { useState,useEffect } from 'react'
// import Card from './Components/Card';
function App() {
  // const [data,setData] = useState(null);
  // useEffect(() => {
  //   getPosts().then((posts)=>setData(posts))
  // }, [])
  return (
    <div className="App bg-zinc-200 w-full">
     
      <Navbar/>
      <Search/>
      <Home/>
    </div>
  );
}

export default App;
