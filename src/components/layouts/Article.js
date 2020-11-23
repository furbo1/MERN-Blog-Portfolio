import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import spinner from "./810.gif"
import {Link} from 'react-router-dom'



const Article = (props) =>{
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname,setAutorname] = useState('')
    const [fileName, setFileName] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8080/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAutorname(res.data.authorname),
            setFileName(res.data.articleImage)
        ])
        .catch(error => console.log(error))
    }, [props])
    return (
        <MainContainer>
            {!title || !article || !authorname? <img src={spinner} alt='..loading' style={{margin:"0 auto", width:"40%", display: "flex" }}/> :
            <>
            <img src={`/uploads/${fileName}`} alt="..."
          style={{ margin: "0 auto", width: "40%", display: "flex" }}/>
            <h2>{title}</h2>
            <p>{article}</p>
            <small className="badge badge-secondary p-2">{authorname}</small>
            <br/>
            <Link to='/'>
            <button  type="submit" className="btn btn-primary my-4">Back to Home</button>
            </Link>
            </>
        }
        </MainContainer>
    )
}

export default Article

const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;
    h2{
        text-align: center;
        font-weight: 900;
        color: var(--green-shade);
    }
    img{
        width: 3rem;
        display: block;
        margin: 0 auto;
    }
    .btn-primary {
        margin-top: 2rem;
        background: var(--green-shade);
        border: none;
        &:hover{
            background: var(--light-green)
        }

`
