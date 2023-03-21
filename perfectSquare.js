function perfectSquare(num){
    if(num >=0){
        let sqrtNum = Math.sqrt(num)
        
        if(Math.floor(sqrtNum) === sqrtNum){
            sqrtNum += 1
            let squaredNum = sqrtNum * sqrtNum
            return squaredNum
        } else {
            return -1
        }
    } else {
        return `Please enter a non-negative number.`
    }
}

console.log(perfectSquare(-2))