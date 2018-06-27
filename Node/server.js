const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use('/', (req, res) => {
    res.json({
        mess: 'Hello world'
    });
});
app.listen(PORT, () => {
    console.log('Listening port ' + PORT);
})