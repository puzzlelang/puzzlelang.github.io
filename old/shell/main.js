const { app, BrowserWindow, dialog } = require('electron')
const fs = require("fs");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'puzzle-invert.png',
    //frame:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.webContents.openDevTools()

  console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))

  console.log('fs', fs)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
