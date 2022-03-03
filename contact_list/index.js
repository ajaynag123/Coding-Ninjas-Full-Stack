const express = require('express');
const path = require('path');
const { nextTick } = require('process');
const app = express();
const port = 8000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded())
app.use(express.static('assets'));


//middleware1
//app.use(function(req,res,next){
//console.log('middleware1 called');
//  next();
//})

//middleware2
/**app.use(function(req,res,next){
  console.log('middleware2 called');
  next();
})**/

let contactList = [
    {
        name: 'John',
        phone: '123-456-7890'
    },
    {
        name: 'Mary',
        phone: '098-765-4321'
    },
    {
        name: 'Bob',
        phone: '098-765-4321'
    }
];

app.get('/', (req, res) => {
  return res.render('home',{title: 'My Contacts list',contact_list: contactList});
});

app.get('/practice', (req, res) => {
  return res.render('practice',{title: 'My Contacts list'})});

app.post('/create-contact', (req, res) => {
    //return res.redirect('/practice');
    contactList.push(req.body);
    return res.redirect('/');
  });

app.get('/delete-contact/:phone',(req,res)=>{
  let phone = req.params.phone;
  let contactIndex = contactList.findIndex(contact => contact.phone === phone);
  contactList.splice(contactIndex,1);

  return res.redirect('back');
})





app.listen(port,function(err){
  if(err){
    console.log('Error in running the server',err);}
  console.log('Server is running on port',port);
  });