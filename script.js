let text = document.getElementById("numbers")
const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
const button3 = document.getElementById('3')
const button4 = document.getElementById('4')
const button5 = document.getElementById('5')
const button6 = document.getElementById('6')
const button7 = document.getElementById('7')
const button8 = document.getElementById('8')
const button9 = document.getElementById('9')
const button0 = document.getElementById('0')
const AC_button = document.getElementById('AC')
const dot_button = document.getElementById('dot')
const negative_button = document.getElementById('negative')

let last_number = 0
let current_sign = ''

text.textContent = 0

button0.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '0'
});

button1.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '1'
});

button2.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '2'
});

button3.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '3'
});

button4.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '4'
});

button5.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '5'
});

button6.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '6'
});

button7.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '7'
});

button8.addEventListener("click", () => {
    if (text.textContent == '0' && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '8'
});

button9.addEventListener("click", () => {
    if (text.textContent == 0 && text.textContent != '0.') {
        text.textContent = ''
    }
    text.textContent += '9'
});

AC_button.addEventListener("click", () => {
    text.textContent = 0
    current_sign = ''
});

document.getElementById('divide').addEventListener("click", () => {
    last_number = text.textContent
    text.textContent = 0
    current_sign = '/'
})

document.getElementById('multiply').addEventListener("click", () => {
    last_number = text.textContent
    text.textContent = 0
    current_sign = 'x'
})

document.getElementById('substract').addEventListener("click", () => {
    last_number = text.textContent
    text.textContent = 0
    current_sign = '-'
})

document.getElementById('add').addEventListener("click", () => {
    last_number = text.textContent
    text.textContent = 0
    current_sign = '+'
})

dot_button.addEventListener("click", () => {
    if (text.textContent.split('.').length - 1 >= 1) {
        text.textContent += ''
    }
    else {
        text.textContent += '.'
    }
});

negative_button.addEventListener("click", () => {
    text.textContent = parseFloat(text.textContent) * -1
});

document.getElementById('equal').addEventListener("click", () => {
    if (current_sign == '/') {
        text.textContent = parseFloat(last_number) / parseFloat(text.textContent)
        text.textContent = +parseFloat(text.textContent).toFixed(2)
    }
    else if (current_sign == 'x') {
        text.textContent = parseFloat(last_number) * parseFloat(text.textContent)
        text.textContent = +parseFloat(text.textContent).toFixed(2)
    }
    else if (current_sign == '-') {
        text.textContent = parseFloat(last_number) - parseFloat(text.textContent)
        text.textContent = +parseFloat(text.textContent).toFixed(2)
    }
    else if (current_sign == '+') {
        text.textContent = parseFloat(last_number) + parseFloat(text.textContent)
        text.textContent = +parseFloat(text.textContent).toFixed(2)
    }
    else {
        text.textContent = text.textContent
    }
});