const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDb = require('./mongoDb');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const corsOption ={
    origin: 'http://localhost:3000'
};

mongoDb.main();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API for business requirement',
      version: '1.0.0',
      description:
        'This is a REST API application made with Express. It retrieves data from business requirement.',
      license: {
        name: 'Licensed Under MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Phạm Xuân SƠn',
        url: 'https://github.com/Aeron-Gulf',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  };

const options = {
swaggerDefinition,
// Paths to files containing OpenAPI definitions
apis: ['./app/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.disable('etag');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use('/public', require('express').static('public'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

require('./app/routes/user.routes')(app);

app.get('/', (req, res) => {
    res.json({
        'message': 'welcome to first app'
    });
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
})