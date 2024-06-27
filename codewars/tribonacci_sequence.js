function tribonacci(signature,n){
    const array = []
    for(let i = 0; i < n; i++){
        if(i === 0 || i === 1 || i === 2){
            array[i] = signature[i]
        }
        else{
            array[i] = array[i - 1] + array[i - 2] + array[i - 3]
        }
    }
    return array
}