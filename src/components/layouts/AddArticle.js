import { set } from 'mongoose'
import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'


function AddArticle() {
    const [title, setTitle] = useState('')
    const [article, setArticle] =useState('')
    const [authorname, setAuthorname] =useState('')
    const [message, setMessage] = useState('')
    const [fileName, setFileName] = useState('')

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }

    const chageOnClick = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title)
        formData.append("article", article)
        formData.append("authorname", authorname)
        formData.append("articleImage", fileName)
        

        setTitle('');
        setArticle('');
        setAuthorname('');

        axios.post("http://localhost:8080/articles/add",formData)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <AddArticleContainer>
            <div className='container'>
                <h1>
                    Add New Article
                </h1>
   
        <form onSubmit={chageOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input type="text" 
    className="form-control"   
    placeholder="Author Name"
    onChange={e => setAuthorname(e.target.value)}
    value={authorname}
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" 
    className="form-control"  
    placeholder="Title"
    onChange={e => setTitle(e.target.value)}
    value={title}
    />
  </div>
  
  <div className="form-group">
    <label htmlFor="article">Article</label>
    <textarea className="form-control"  
    rows="3"
    onChange={e => setArticle(e.target.value)}
    value={article}
    ></textarea>
  </div>
  <div className="form-group">
      <label htmlFor="file" >
          Chose article image
      </label>
      <input type="file" 
      fileName="articleImage" 
      className="form-control-file"
      onChange={onChangeFile}
      />
      
  </div>   
  <button type="submit" className="btn btn-primary">Post Article</button>
  <br/>
  <span className="message">{message}</span>
</form>
</div>
</AddArticleContainer>
    )
}

export default AddArticle

const AddArticleContainer= styled.div`
margin: 3rem auto;
padding: 4rem;
width: 31rem;
h1{
    font-weight: 900;
    color: var(--green-shade)
}
.btn-primary {
    margin-top: 2rem;
    background: var(--green-shade);
    border: none;
    &:hover{
        background: var(--light-green)
    }
}
.message{
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
}

`
