let test = ["T", "e", "s", "t"]

function easyRead (){
    let p = document.querySelector("p").innerHTML
    console.log(p)
    let letters = p.split("")
    console.log(letters)
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `<span>${firstHalf(letters)}</span>${secondHalf(letters)}`
    return paragraph
}

function firstHalf(array){
    let bold = []
    for (let i = 0; i < (array.length / 2); i++){
        bold.push(array[i])
    }
    return bold.join("")
}

function secondHalf(array){
    let slim = []
    for (let i = array.length; i >= (array.length / 2); i--){
        slim.push(array[i])
    }
    return slim.reverse().join("")
}

function renderEasyRead (){
    let body = document.querySelector("body")
    let paragraph = easyRead()
    body.innerHTML = ""
    body.append(paragraph)
}