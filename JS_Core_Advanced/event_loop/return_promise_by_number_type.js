const processData = (data) => {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject(new Error('Error'));
        }
        if (data % 2 !== 0) {
            setTimeout(() => {
                resolve("Odd")
            }, 1000)
        }
        setTimeout(() => {
            resolve("Even")
        }, 2000)
    })
}

const get = async (data) => {
    try {
        const result = await processData(data)
        console.log(result)
    } catch (e) {
        console.log(e)
    }

}

get('fggfgfgf')
get(1)
get(2)
