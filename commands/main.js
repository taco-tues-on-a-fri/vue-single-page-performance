console.log('main.js loaded')

const _truncateString = (text, length, useEllipses) => {
  // for (let i = 0; i < 10000; i++) {
  //   Math.sqrt(Math.random() * i);
  // }
  if (text.length < length) return text
  else {
  let trimmed = text.slice(0, length)
  trimmed = trimmed.slice(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))
  return useEllipses ? trimmed + '…' : trimmed
  }
}

const commands = {
  openUrl (text) {
    console.log('commands.js: openUrl(text) =>  forloop executed')
    for (let i = 0; i < 10000; i++) {
    Math.sqrt(Math.random() * i);
  }
    return text
  },
  openMap (text) {
    console.log('commands.js: openMap(text) =>  executed=', text)
  }
}
