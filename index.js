function writeCards(arr,message) {
    const cardArr = [];
    
    for(let i = 0; i<arr.length; i++){
        cardArr.push(`Thank you, ${arr[i]}, for the wonderful ${message} gift!`)
    }
    return cardArr;
}

function countDown(int){
    for(let i = int; i>=0; i--){
        console.log(i);
    }
}