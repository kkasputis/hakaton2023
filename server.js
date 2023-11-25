let express = require('espress');

let app = express;

app.use(express.static(__dirname+'/dist/hakaton-2023'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname+'/dist/hakaton-2023/index.html')
})
