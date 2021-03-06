var morgan = require('morgan');
var bodyParser = require('body-parser');
var authRouter = require('../api/authRoutes.js');

module.exports = function(app, express) {
  var apiRouter = express.Router();

  app.use(express.static(__dirname + '/../../client'));
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  }));
  app.use(bodyParser.json({
    limit: '50mb'
  }));

  app.use('/auth',authRouter);
  app.use('/api', apiRouter); //localhost:3000/api/
  require('../api/httpRoutes.js')(apiRouter);

};
