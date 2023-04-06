const express=require('express');
const path=require('path');


const app=express();
const methodOverride = require('method-override');


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extensions:true}));
app.use(methodOverride('_method'));
// app.use(express.json());

const blogs=[
    {
        id:0,
        title:"My first Blog",
        author:"shree",
        content:"This is my new blog and we are learning rest-architecture",
        imageUrl:"https://images.unsplash.com/photo-1669555494350-13e9c8252115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

    
   
]

app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})

app.get('/blogs/new',(req,res)=>{
    res.render('new');
})

app.post('/blogs',(req,res)=>{
    console.log(req.body);
    const {author,title,content,imageUrl}=req.body;
    console.log({author,title,content,imageUrl});
    blogs.push({id:blogs.length,author,title,content,imageUrl});
    res.redirect('/blogs');

})
// app.get('/blogs/:blogId', (req, res) => {
//     const { blogId } = req.params;
//     const blog = blogs.find((blog) => blog.id === parseInt( blogId));
    
//     // If blog doesnt exists
//     if (!blog) return res.status(404).send('Bad Request');
//     return res.render('show', { blog });
// });
// app.get('/blogs/:blogId/edit', (req, res) => {
//     const { blogId } = req.params;

//     const blog = blogs.find((blog) => blog.id === parseInt( blogId));
//     // If blog doesnt exists
//     if (!blog) return res.status(404).send('Bad Request');

//     res.render('edit', { blog });
// });

// // for modifying the blog use patch req
// app.patch('/blogs/:blogId', (req, res) => {
//     const { blogId } = req.params;
//     const { author,title, imageUrl,content } = req.body;
//     const blog = blogs.find((blog) => blog.id === parseInt( blogId));
//     // If blog doesnt exists
//     if (!blog) return res.status(404).send('Bad Request');
   
//     blog.author=author;
//     blog.title = title;
//     blog.imageUrl = imageUrl;
//     blog.content = content;
//     res.redirect(`/blogs/${blogId}`);
// });


app.listen(8000,()=>{
    console.log('server listening to port 8000...');
})