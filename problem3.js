const numbers = [2, 4, 6, 3];
const average = (number) => {
    let sum = 0;
    let avgSum = 0;
    for (let num of number) {
        const sqrNum = Math.pow(num, 2);
        sum += sqrNum;
    }
    avgSum = sum / number.length;
    return avgSum;
}

const result = average(numbers);
console.log(result);