function scoreThrows(radii) {
    const shotsAmount = radii.length;
    if (shotsAmount === 0) {
        return 0
    }

    let totalPoints = 0;

    let smallRadiusAmount = 0;

    radii.forEach((item) => {
        if (item > 10) {
            return totalPoints += 0;
        }
        if (item >= 5  && item <= 10) {
            return totalPoints += 5
        }
        if (item < 5) {
            smallRadiusAmount++;
            return totalPoints += 10
        }
    })

    if (smallRadiusAmount === shotsAmount) {
        totalPoints += 100;
    }
    return totalPoints;
}

console.log(scoreThrows([1, 5, 11]))