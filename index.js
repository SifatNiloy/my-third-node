const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req, res) => {

    res.send('hello from node. this text is changed.')

})
const users = [
    { id: 0, name: 'tom cruise', email: 'tom@gmail.com', phone: " 536424367346" },
    { id: 1, name: 'hangs', email: 'hangs@gmail.com', phone: " 3463535647" },
    { id: 2, name: 'robert darwiny', email: 'rdj@gmail.com', phone: " 4654623467" },
    { id: 3, name: 'will smith', email: 'smith@gmail.com', phone: " 675792578" },
    { id: 4, name: 'samuel jackson', email: 'samuel@gmail.com', phone: " 3854654692" },
    { id: 5, name: 'johny deep', email: 'johnydeep@gmail.com', phone: "3456323982" },
    { id: 6, name: 'christian bale', email: 'baleom@gmail.com', phone: " 54353453482" },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port', port)
})