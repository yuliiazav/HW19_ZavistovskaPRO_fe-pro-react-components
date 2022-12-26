import React from "react";
import PropTypes from "prop-types";

let articlePostsList = [
    {
        title: "15 полезных однострочных выражений JavaScript",
        description: "Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners",
    },
    {
        title: "Полиморфизм простыми словами",
        description: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
    },
    {
        title: "Начало работы с Node.js",
        description: "Node Hero: Глава 1",
    },
    {
        title: "Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)",
        description: "Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).",
    },
    {
        title: "8 практичных хитростей веб-разработчика применить немедленно!",
        description: "HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately"
    },
    {
        title: "Насколько JavaScript сильный?",
        description: "Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?"
    },
    {
        title: "Изучите CSS-переменные за 5 минут",
        description: "Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.",
    },
    {
        title: "Создание MEVN-приложения (Часть 1/2)",
        description: "Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)",
    },
    {
        title: "Реактивность Vue.js",
        description: "Реактивность фреймворка Vue.js и использование метода Vue.set",
    },
    {
        title: "Микроптимизации производительности и JavaScript",
        description: "Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…",
    },
    {
        title: "Девшахта-подкаст",
        description: "#108: Производительность кода — это важнейший критерий качества?",
    },
    {
        title: "Одна из самых красивых идей в информатике: Y-Combinator",
        description: "Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”",
    },
]
export function Article (title, description){
    function articleStructure() {
        return articlePostsList.map(({title, description}) => {
            return <li key={title} className="list__item">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </li>
        })
    }

    return <ul className="list">
        {
            articleStructure({title, description})
        }
    </ul>

}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}









