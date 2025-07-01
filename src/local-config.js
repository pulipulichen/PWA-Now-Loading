let localConfig = {
  nowMessage: ``,
  nextMessage: ``,
  noteMessage: ``, 
  coverImage: `./assets/cover/pudding-cake.gif`,
  coverStyle: `round`,
  backgroundColor: `#feebed`,
  coverSize: 'contain',
  clockColor: `#644329`,
  scheduleMessageColor: `#785c47`,
  noteMessageColor: `#b89168`,
  rolloutNumber: '',
  rolloutColor: 'brown',
  lastChanged: null,
  iframeURL: ``,
  displayCountdownTimer: false,
  breakTime: "9,10,11,12,14,15,16,17,18",
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig