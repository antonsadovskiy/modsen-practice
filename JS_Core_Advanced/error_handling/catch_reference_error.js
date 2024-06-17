const catchReferenceError = () => {
    try {
        console.log(b)
    } catch (e) {
        console.log("ReferenceError: b is not defined")
    }
}

catchReferenceError()