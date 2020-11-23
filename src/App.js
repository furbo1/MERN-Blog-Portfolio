import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Articles from './components/layouts/Articles'
import AddArticle from './components/layouts/AddArticle'
import Article from './components/layouts/Article'
import EditArticle from './components/layouts/EditArticle'
import NavbarContainer from './components/layouts/Navbar';

function App() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    axios
    .get('http://localhost:8080/articles')
    .then(res => setPosts(res.data))
    .catch(error=> console.log(error))
   
  }, [])
  return (
    
    <div className="App">
      <NavbarContainer/>
     <Header/>
    
    <Route exact path='/' render={()=><Articles posts={posts}/>}/> 
    <Route path='/article/:id' render={props => <Article {...props} posts={posts}/>}/> 
    <Route path='/update/:id' render={props => <EditArticle {...props} posts={posts}/>}/> 
    <Route path="/add-article" component={AddArticle}/>
     <Footer/>
     
    </div>
  );
}

export default App;
