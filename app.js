const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path')
const _ = require('lodash')

const homeStartingContent = "Apple wants a weekend or expensive dui want to decorate. Which is always the creator nor the duration of her life. Carrots carrots just been running a lot. Product lived in this. Financing yeast rice vegetarian or clinical portal. That they are not members, nor members of the Donec ultrices tincidunt arcu. A lot of television targeted at the undergraduate nutrition. Of life, and the mountains shall be born, ultricies quis, congue in magnis dis parturient. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The founder of basketball and football propaganda graduated drink at the arc. Performance skirt smile at any hate for hate vulputate. Running a lot of television targeted at the undergraduate nutrition.";
const aboutContent = "Textile manufacturing refinancing is beating. Textile manufacturing dictumst the kids elit. There diameter and boat manufacturing lorem. Consectetur adipiscing elit sagittis purus each one it is. But the price they want, but the smile Vulputate soccer massage. In some salad largest ecological. Makeup is always the laughter from her, Whosoever shall not nibh sed ac hendrerit gravida. Westinghouse peanut sauce or carrots mass of temperature. For the arrows of life, so that the earth element. In basketball largest peanut running Massa developers worth it.";
const contactContent = "Thermal deductible until the price vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Inspections Ut et drink recipes. Minneapolis developer undergraduate homework et. Laughter pull undergraduate at iaculis in the region. Nor do some shooting movies malesuada bibendum sapien arcu vitae. Recipe sometimes varied mainstream real estate. But now targeted propaganda opportunities. Sometimes put lorem ipsum carrots undergraduate tomato soup. The cushion element of the whole, they shall neither. Basketball was pregnant dark to invest clinical zero. So that the disease in the aliquam sem mauris fringilla tincidunt. Set the temperature to photography always pull for free.";

const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = []

app.get('/' ,async (req , res) =>{
  res.render('home' ,{
    startingContent: homeStartingContent ,
    newPosts: posts
  })
})

app.get('/about' , async(req,res) =>{
  res.render('about' , {
    aboutContent: aboutContent
  })
})

app.get('/contact' , async (req,res) =>{
  res.render('contact' , {
    contactContent: contactContent
  })
})

app.get('/compose' ,async (req,res) =>{
  res.render('compose')
})

app.post('/compose' ,async (req,res)=>{
    const post = {
      title: req.body.postTitle ,
      body: req.body.postBody
    }
    
    posts.push(post)
    res.redirect('/')
})

app.get('/posts/:text' , async (req,res)=>{
  const storedTitle = _.startCase(req.params.text)
  const found = posts.find(({title}) => title === storedTitle)
  if(found){
    res.render('post' ,{
      newPosts : found
    })
  }
})

app.listen(port, function() {
  console.log("Server started on port 3000");
});
