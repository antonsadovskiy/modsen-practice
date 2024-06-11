function amountOfPages(summary) {
    let totalAmount = 0;

    let pages = 1;

    while (totalAmount < summary) {
        const stringAmount = pages.toString().length;
        totalAmount += stringAmount

        pages++
    }

    return pages - 1
}

console.log(amountOfPages(25)) // 17
console.log(amountOfPages(1095)) //, 401)
console.log(amountOfPages(660)) // 256