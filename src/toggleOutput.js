// toggleOutput.js

export function toggleOutput() {
    var outputElement = document.getElementById('output');
    var button = document.querySelector('.btn1');
    
    if (outputElement.style.display === 'none' || outputElement.style.display === '') {
        outputElement.style.display = 'block';
        button.innerText = 'Скрыть код';
    } else {
        outputElement.style.display = 'none';
        button.innerText = 'Посмотреть код';
    }
}

// Глобальная переменная, в которую мы помещаем функцию
window.toggleOutput = toggleOutput;



