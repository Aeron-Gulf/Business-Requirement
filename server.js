const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDb = require('./mongoDb')

const corsOption ={
    origin: 'http://localhost:3000'
}

mongoDb.main();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors(corsOption))

require('./app/routes/user.routes')(app);

app.get('/', (req, res) => {
    res.json({
        'message': 'welcome to note'
    })
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})