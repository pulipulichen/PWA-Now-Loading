let localConfig = {
  nowMessage: ``,
  nextMessage: ``,
  noteMessage: ``, 
  coverImage: `./assets/cover/pudding-cake.gif`,
  coverStyle: `round`,
  backgroundColor: `#FFFFFF`,
  coverSize: 'contain',
  clockColor: `#000000`,
  scheduleMessageColor: `#000000`,
  noteMessageColor: `#000000`,
  rolloutNumber: '',
  rolloutColor: 'black',
  lastChanged: null
}

// ----------------------------------------------------------------

let localConfigEnv = {
  locale: 'zh-TW'
}

for (let name in localConfigEnv) {
  localConfig[name] = localConfigEnv[name]
}

export default localConfig