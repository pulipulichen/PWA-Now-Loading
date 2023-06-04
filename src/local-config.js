let localConfig = {
  scheduleMessage: `NEXT...`,
  publicMessage: `休息一下`,
  coverImage: `./assets/cover/tsuyokaze.gif`,
  coverStyle: `round`,
  backgroundColor: `#FFFFFF`,
  fontColor: `#000000`,
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