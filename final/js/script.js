function askQuestion() {
    var p=prompt('When was Liverpool FC Founded');
    if (p !=null) {
        document.getElementById ('question').innerHTML='You said ' +p+ '. The answer is 1892.'
    }

}

function askQuestion2() {
    var p=prompt('What is the Rivalry Called');
    if (p !=null) {
        document.getElementById ('question').innerHTML='You said ' +p+ '. The answer is Mercryside Derby.'
    }
}