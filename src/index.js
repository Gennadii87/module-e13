
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

document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output_json');
    const fetchDataButton = document.getElementById('fetchDataButton');

    fetchDataButton.addEventListener('click', function () {
        // fetch для получения данных из JSON-сервера
        fetch('http://localhost:3000/contacts') 
            .then(response => response.json())
            .then(data => {
                // После успешного получения данных
                const formattedData = data.map(contact => (
                    `{
                        "id": ${contact.id},
                        "name": "${contact.name}",
                        "email": "${contact.email}",
                        "phone": "${contact.phone}"
                    }`
                ));

                // Объединяем массив строк в одну строку с переносами строк
                outputElement.innerHTML = `<pre>${formattedData.join(',\n')}</pre>`;
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                outputElement.textContent = 'Произошла ошибка при получении данных.';
            });
    });
});
