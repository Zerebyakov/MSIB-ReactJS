// Nama : Zulfan Ariq Asidqi
// ReactJs 02
// Kode Peserta : RJO209

function arrSum(arr) {
    let maxSum = arr[0]; 
    let currentSum = arr[0]; 
    let start = 0, end = 0, tempStart = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStart = i; 
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    let subArray = arr.slice(start, end + 1);

    return [subArray, maxSum];
}
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // output [[4,-1,-2,1,5],7]
