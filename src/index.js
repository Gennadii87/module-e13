
import * as math from './math';
import './style.css';
import { toggleOutput } from './toggleOutput'; 

const multiply = (a) => a * 8;

document.addEventListener('DOMContentLoaded', function () {
    // Этот код выполнится после полной загрузки DOM

    // Выводим данные в элемент
    var outputElement = document.getElementById('output');
    outputElement.innerHTML =
        'ES6, module !<br>' +
        'sum from math= ' + math.sum(32, 11) + '<br>' +
        'multiply from index.js = ' + multiply(0.9) + '<br>' +
        'multiply from math = ' + math.multiply(3) + '<br>';

    // Вызываем функцию toggleOutput при загрузке DOM
    toggleOutput();
});