const fetchAndProcessData = async () => {
    try {
        return await getDataFromServer();
    } catch (error) {
        return error.message;
    }
}


const getDataFromServer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error'))
        }, 1000)
    })
}
