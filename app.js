"use strict";

let hunger = 50;
let happiness = 50;
let health = 50;

const name = prompt("Введите имя питомца ");

while(true){
    const menu = `Состояние питомца "${name}":
------------------------
    Голод : ${hunger}
    Счастье : ${happiness}
    Здоровье : ${health}
------------------------
Чем займёмся? 
1. Кормить 
2. Играть
3. Уложить спать
4. Выход`;

}

let choice = Number (prompt(menu)); 

switch (choice){
    case 1:
        alert('питомец "${name}" поел.');
        hunger -= 12;
        happiness -= 5;
        health += 3;
        break;
    case 2:
        alert('питомец "${name}" поиграл');
        happiness +=7;
        hunger +=10;
        health +=2;
        break;
    case 3:
        alert('питомец "${name}" поспал');
        happiness +=6;
        hunger +=7;
        health +=4;
        break;
        default:
            alert("ошибка: неверно выбран номердействий");


}