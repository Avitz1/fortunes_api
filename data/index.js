const express = require('express');

const port = 3000;
const app = express();

app.get('/fortunes', (req, res) => {
    console.log('requesting fortunes');
});

app.listen(port, () => console.log(`Listening on port ` + port));
