let test = ["T", "e", "s", "t"]

function easyRead (){
    let p = document.querySelectorAll("p").innerHTML
    console.log(p)
    let words = p.split(" ")
    let paragraph = document.createElement("p")
    for (let word of words){
        console.log(word)
        let letters = word.split("")
        let first = firstHalf(letters)
        let second = secondHalf(letters)
        paragraph.innerHTML += (first)
        paragraph.append(second)
        paragraph.innerHTML += " "
    }

    return paragraph
}

function firstHalf(array){
    let bold = []
    bold.push("<b>")
    for (let i = 0; i < (array.length / 2); i++){
        bold.push(array[i])
    }
    bold.push("</b>")
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