// Your code here

function mapToNegativize(array) {
    const negArray = []

    for (let i=0; i < array.length; i++) {
        let int = array[i] 
        let negInt = int * -1  
        negArray.push(negInt)
    }

    return negArray
}

function mapToNoChange(array) {
    const newArray = [] 

    for (let i=0; i < array.length; i++) {
        let el = array[i] 
        newArray.push(el)
    }

    return newArray
}

function mapToDouble(array) {
    const doubArray = [] 

    for (let i=0; i < array.length; i++) {
        let elDub = array[i] * 2
        doubArray.push(elDub)
    }
    return doubArray
}

function mapToSquare(array) {
    const sqNums = [] 

    for (let i=0; i < array.length; i++) {
        let sqNum = array[i] * array[i] 
        sqNums.push(sqNum)
    }
    return sqNums
}

function reduceToTotal(nums, starting=0) {
    let total = starting; 

    for (let i=0; i < nums.length; i++) {
        total = total + nums[i] 
    }
    return total 
}

function reduceToAllTrue(array) {
    let truths = [] 
    let falses; 

    for (let i=0; i < array.length; i++) {
        if (array[i]) {
            truths.push(array[i])
        } else {
            falses = "FalseFlag"
        }
    }   

    if (falses === "FalseFlag") {
        return false
    } else {
        return true 
    }
}

function reduceToAnyTrue(array) {
    let truths; 

    for (let i=0; i < array.length; i++) {
        if (array[i]) {
            truths = "TruthFlag" 
        }
    }
    if (truths) {
        return true 
    } else {
        return false 
    }
}