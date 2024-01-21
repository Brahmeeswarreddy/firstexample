
import Header from "./components/Header"
import Sider from "./components/Sider"
import Footer from "./components/Footer"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm"
import { PostProvider } from "./store/postStore";
import {useState} from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [sideItem,setSideItem]=useState("Home")
  return (
    <PostProvider>
    <div className="App">
      <Header/>
      <div className="first">
      <Sider sideItem={sideItem} setSideItem={setSideItem} />
      <div className="second">
        {sideItem==="Home" ? <PostList/> : <PostForm/>}
      

     
     <Footer className="footer"/>
      </div>

      </div>

    </div>
    </PostProvider>
  );
}

export default App;
