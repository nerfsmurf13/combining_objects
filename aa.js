// Given two arrays, write a method to compute their intersection. 
// For example, given [1, 2, 2, 1] and [2, 2], the method returns [2]. 
// Each value in the result should appear only once, regardless of how many 
// times it appears in either array. The result can be in any order.
console.log("What")
// [1,2,3]
// [3,5,7]
//output [3]
let test1 = [1, 2, 2, 1, 3]
let test2 = [2, 2, 3]


let intersection = (arr1, arr2) => {
    let matched = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && matched.indexOf(arr2[j]) === -1) {
                matched.push(arr2[j])
            }
        }
    }
    console.log(matched)
    return matched
}

// intersection(test1, test2)

let makeBetweenFunc = (x, y) => {
    return function (num) {
        return num >= x && num <= y
    }
}