let test = ['T', 'e', 's', 't']

function easyRead (p) {
  para = p.innerHTML
  let words = para.split(' ')
  let paragraph = document.createElement('p')
  for (let word of words) {
    console.log(word)
    let letters = word.split('')
    let first = firstHalf(letters)
    let second = secondHalf(letters)
    paragraph.innerHTML += first
    paragraph.append(second)
    paragraph.innerHTML += ' '
  }
  return paragraph
}

function firstHalf (array) {
  let bold = []
  bold.push('<b>')
  for (let i = 0; i < array.length / 2; i++) {
    bold.push(array[i])
  }
  bold.push('</b>')
  return bold.join('')
}

function secondHalf (array) {
  let slim = []
  for (let i = array.length; i >= array.length / 2; i--) {
    slim.push(array[i])
  }
  return slim.reverse().join('')
}

function renderEasyRead () {
  let body = document.querySelector('body')
  let paragraphs = document.querySelectorAll('p')
  body.innerHTML = ''
  for (let p of paragraphs){
  let paragraph = easyRead(p)
  body.append(paragraph)
  }
}
