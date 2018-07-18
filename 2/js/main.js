var who = prompt("кто пришел?");

if (who == "Админ") {
    var password = prompt("пароль")
    if (password == "черный властелин") {
        alert("добро пожаловать")
    }
    if (password != "черный властелин") {
        alert("пароль неверен")
    }
    else if (password == null) {
        alert("вход отменен")
    }

}
if (who == null) {
    alert("вход отменен");
}

else if (who != "Админ") {
    alert("я вас не знаю")
}



