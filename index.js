const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Abdullah', profession: 'Doctor'},
    {id: 2, name: 'Amir', profession: 'Doctor'},
    {id: 3, name: 'Aura', profession: 'Doctor'},
]


app.get('/', (req, res)=> {
    res.send('User management server is running')
})

app.get('/users', (req,res)=> {
    res.send(users)
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})