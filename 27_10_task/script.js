// let capital = prompt('Столица Кыргызстана',"");
// if(capital == "Бишкек"){
//     alert("Верно!")
// } else{
//     alert("Не знаете?")
// }


let user_name = prompt('Кто пришел?','');
console.log(user_name);

if(user_name === "Админ"){
   let password = prompt('Пароль','');

    if(password == 'Черный Властелин'){
        alert("Добро пожаловать")
    }else if(password){
        alert("Пароль не верный")
    }else{
        alert("Вход отменен")
    }
}else if(user_name !== null){
    alert("Я вас не знаю")
}else if(user_name === ''){
    alert("Заполните поле")
}
else{
    alert("Вход отменен")
}


