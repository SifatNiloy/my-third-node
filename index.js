const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('hello from node. this text is changed.')

})
app.listen(port, () => {
    console.log('listening to port', port)
})