
const bodyParser = require('body-parser');
const PORT = 3000;


module.exports = (electronApp, browserWindow) => {

  let express = require('express'),
    app = express(),
    server = require('http').Server(app);
  const Router = express.Router();
  Router.use(bodyParser.json()); // support json encoded bodies
  Router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  server.listen(PORT, () => {
    console.log('express server running on', PORT, "App Path", electronApp.getPath('userData'));
  });

  //console.log("config path", CONFIG_PATH);
  browserWindow.on('close', () => {
    server.close(() => {
      //Application shutdown gracefully
      process.exit(0);
    });
  });
}
