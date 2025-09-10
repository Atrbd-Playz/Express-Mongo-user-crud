const express = require('express');
const app = express();
const path = require("path")
const userModel = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/userlist', async (req, res) => {
  const users = await userModel.find()
  res.render('userlist', { users })
})

app.post('/create', async (req, res) => {
  const { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name: name,
    email: email,
    image: image
  })
  res.redirect('/userlist')
})

app.get('/delete/:id', async (req, res) => {
  const { id } = req.params
  await userModel.findByIdAndDelete(id)
  res.redirect('/userlist')
})

app.get('/edit/:userid', async (req, res) => {
  const userid = req.params.userid
  const user = await userModel.findById(userid)
  res.render('edit',{user})
})

app.post('/updated/:id', async (req, res) => {
  const id = req.params.id
  const {name,email,image} = req.body;
  let userid = await userModel.findOneAndUpdate({_id: req.params.id},{
    name:name,
    email:email,
    image:image
  }, {new:true})

  res.redirect('/userlist')

})




app.listen(3000)