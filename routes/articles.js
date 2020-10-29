const express = require('express')
const router = express.Router()
const multer = require("multer")
const Articles = require('../models/articles')


const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, "./client/public/uploads/")
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname)
    }
})

const upload = multer({storage:storage})


//Request to get all articles
router.get('/', (req,res) =>{
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error ${err}`))
})

//request add new article
router.post('/add',upload.single("articleImage"), (req,res) =>{
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname,
        articleImage: req.file.originalname,
    })
    newArticle
    .save()
    .then(()=> res.json("The new article was successfully posted!"))
    .catch(err => res.status(400).json(`Error: ${err}`))

});

//request find article by ID
router.get('/:id', (req,res)=>{
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//req find article by ID and update
router.put('/update/:id',upload.single("articleImage"), (req,res)=>{
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;
        article.articleImage = req.file.originalname;

        article
        .save()
        .then(()=> res.json("The article was sucessfully updated!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

//req find article by ID and delete
router.delete('/:id', (req,res) =>{
    Articles.findByIdAndDelete(req.params.id)
    .then(()=> res.json("The article was deleted!"))
    .catch(err=> res.status(400).json(`Error: ${err}`))
})

module.exports = router;