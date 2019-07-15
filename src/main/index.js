import {app, BrowserWindow, ipcMain} from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static =
      require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let commentWindow

const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

const commnetWinURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080/#/message` :
    `file://${__dirname}/index.html/#/message`
function createWindow() {
  const Screen = require('electron').screen
  const size = Screen.getPrimaryDisplay().size  // ディスプレイのサイズを取得
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: true,
    resizable: false,  // ウィンドウサイズ変更不可
    width: 600,
    backgroundColor: '#303030'  // ウィンドウ自体の背景色
  })
  mainWindow.loadURL(winURL)

  commentWindow = new BrowserWindow({
    left: 0,
    top: 0,
    height: size.height,
    width: size.width,
    resizable: false,   // ウィンドウサイズ変更不可
    transparent: true,  // 背景を透明
    frame: false,       // ウィンドウフレームを非表示
    toolbar: false,     // toolbarを非表示
    alwaysOnTop: true   // 常に一番手前に表示
  })
  // 透明な部分のマウスのクリックを検知させない
  commentWindow.setIgnoreMouseEvents(true)
  commentWindow.loadURL(commnetWinURL)

  mainWindow.on('closed', () => {
    mainWindow = null
    commentWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on(
    'activate',
    () => {
      if (mainWindow === null) {
        createWindow()
      }
    })

    /**
     * Auto Updater
     *
     * Uncomment the following code below and install `electron-updater` to
     * support auto updating. Code Signing with a valid certificate is required.
     * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
     */

    /*
    import { autoUpdater } from 'electron-updater'

    autoUpdater.on('update-downloaded', () => {
      autoUpdater.quitAndInstall()
    })

    app.on('ready', () => {
      if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
    })
     */
