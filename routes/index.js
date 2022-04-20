// var express = require('express');
// const bodyParser = require('body-parser');
// const api = require('./routes/api');


// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());
// app.use('')


// app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Choose your Music!' });
});

module.exports = router;