function easyRead (p) {
  para = p.innerText
  let words = para.split(' ')
  let paragraph = document.createElement('p')
  for (let word of words) {
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
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    bold.push(array[i])
  }
  bold.push('</b>')
  return bold.join('')
}

function secondHalf (array) {
  let slim = []
  for (let i = array.length; i >= Math.floor(array.length / 2); i--) {
    slim.push(array[i])
  }
  return slim.reverse().join('')
}

function renderEasyRead () {
  let paragraphs = document.querySelectorAll('p')
  for (let p of paragraphs) {
    let paragraph = easyRead(p)
    console.log(paragraph)
    p.innerHTML = paragraph.innerHTML
  }
}