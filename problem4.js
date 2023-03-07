const num1 = [5, 45, 64, 65, 78];
const num2 = [7, 65, 32, 47, 12, 98];

const maxNumber = (num1, num2) => {
    const newArray = [...num1, ...num2];
    const maxNum = Math.max(...newArray);
    return maxNum;
}

const result = maxNumber(num1, num2);
console.log(result)