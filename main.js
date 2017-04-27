const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow () { 
  win = new BrowserWindow({width: 800, height: 600,  alwaysOnTop:true })
  windowPath('index')
  //Open the DevTools.
  //win.webContents.openDevTools()
    
  win.on('closed', () => {
    win = null
  })
}

/*function createNewWindow(fileName,w,h,f){
    var win2
    win2 = new BrowserWindow({width:w, height:h, frame:f})
    windowPath(fileName)
    win2.on('closed', () => {
    win2 = null
  })
}*/

function windowPath(name){
    win.loadURL(url.format({
    pathname: path.join(__dirname, name+'.html'),
    protocol: 'file:',
    slashes: true
  }))
}
