for (let i = 0; i < 5; i++) {
    var a = 1;
}
for (let i = 0; i < 5; i++) {
    const b = 2;
}
for (let i = 0; i < 5; i++) {
    let c = 3;
}

// только переменная объявленная с помощью ключевого слова var будет видна после завершения цикла
// так как она имеет функциональную область видимости