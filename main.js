const { app, BrowserWindow } = require('electron');

const path = require('path')
const url = require('url');


let win;

function createWindow() {
  win = new BrowserWindow({ width: 1200, height: 800, minHeight: 600, minWidth: 800 });
  win.webContents.openDevTools();

  let shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  if (shouldQuit) {
    app.quit();
    return;
  }

  require('./server')(app, win);

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/src/index.html'),
    protocol: 'file:',
    slashes: true
  }));


  win.focus();

  win.on('close', function () { //   <---- Catch close event

  });

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})

process.on('uncaughtException', function (err) {
  console.log("-----ERROR-----", err);
})
