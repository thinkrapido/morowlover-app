
require('electron-reload')(__dirname);

const { app, BrowserWindow } = require('electron');

const url = `file://${__dirname}/index.html`;

let win;

function createElectronShell() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(url);
  win.on('closed', () => { win = null; });
  win.webContents.openDevTools();
}

app.on('ready', createElectronShell);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (win === null) createElectronShell();
});
