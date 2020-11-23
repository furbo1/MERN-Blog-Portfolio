import React,{useState} from 'react'
import styled from 'styled-components'
import spinner from "./810.gif"
import {Link} from 'react-router-dom'
import axios from 'axios'
 
const Articles =({posts})=> {
    const [article, setArticle] = useState([])
//Delete article by ID
const deleteArticle = id =>{
    axios.delete(`http://localhost:8080/articles/${id}`)
    .then(res => alert(res.data))
    setArticle(article.filter(elem => elem._id !== id))
}
    
    return (
        <MainContainer>
            
            { !posts.length ? (<img src={spinner} alt="...loading"/> ):(
            posts.map((article,key) =>(
                <div className="container" key={key}>
                    <img src={`/uploads/${article.articleImage}`} alt="MERN image" style={{width:"80%"}}/>
                    <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                    <h2>{article.title}</h2>
                    </Link>
                    
                    <p>{article.article}</p>
                    <small className="badge badge-secondary p-2 ml-2">{article.authorname}</small>
                
                <div className='row my-4'>
                    <div className='col-sm-3'>
                        <Link to={`/update/${article._id}`} className='btn btn-outline-success'>Edit Article</Link>
                    </div>
                    <div className='col-sm-3'>
                        <button onClick={()=> deleteArticle(article._id)} className='btn btn-outline-danger'>Delete Article</button>
                    </div>

                </div>
                <hr/>
         

                </div>
               
            )))}
        </MainContainer>
    )
}

export default Articles

const MainContainer = styled.div`
    margin: 7rem 0;
    h2{
        text-align: center;
        padding: 1rem;
    }
    .btn{
        margin: 0.5rem;
        min-width: 120px;
    }
    img{
        width: 3rem;
        display: block;
        margin: 0 auto;
    }


`
