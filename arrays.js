// 1) some()
const array = ["a","b","c","d","e"];
const result1 = array.some(test => test === "f");

console.log('result1 =====>', result1);

// 2) reduce()

const array1 = [1, 2, 3, 4, 5];
const result2 = array1.reduce((tot,val) => tot + val);

console.log("result2 =====>", result2);