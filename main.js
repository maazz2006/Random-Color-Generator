const randBtn = document.querySelector('button');
const box = document.querySelector('.box');
const hexValue = document.querySelector('.colorHex');
const body = document.querySelector('body');


const hexValues = [
    '123456789',
    'ABCDEF'
]
let newHex="#"

const changeColor = () => {
    
    for (let index = 0; index < 6; index++) {
        const randChar =  hexValues[Math.floor(Math.random(2) * hexValues.length)];
        newHex += randChar[Math.floor(Math.random(randChar.length) * randChar.length)]
    }
    box.style.backgroundColor = newHex
    hexValue.innerHTML = newHex
    randBtn.style.backgroundColor = newHex
    body.style.backgroundColor = newHex
    newHex = '#'

}

randBtn.addEventListener('click',changeColor)