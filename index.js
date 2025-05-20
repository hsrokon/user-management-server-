const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'Abdullah', email: 'ab@gmail.com'},
    {id: 2, name: 'Amir', email: 'am@gmail.com'},
    {id: 3, name: 'Aura', email: 'au@gmail.com'},
]

app.get('/', (req, res)=> {
    res.send('User management server is running')
})

app.get('/users', (req,res)=> {
    res.send(users)//it will update the new user via>> users.push(newUser) --below
})

app.post('/users', (req, res)=> {
    console.log(req.body);
    console.log('post api hitting');
    
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser)
    res.send(newUser)//it'll give the response to the client side
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})