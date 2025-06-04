const app = require('express')();
const cors = require('cors');

const PORT = 8080;

app.use(cors());

app.listen(
    PORT, () => console.log(`it's alive on http://localhost:${PORT}`)

)

// Request is from the client and response is what is sent back: what the engineer types in the braces
app.post('/login', (req, res) => {
    console.log(req.body.username, 'Hey YO!')


})
