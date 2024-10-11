// Nama : Zulfan Ariq Asidqi
// ReactJs 02
// Kode Peserta : RJO209

function sumArray(arr, int) {
    let result = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        let complement = int - arr[i];
        if (seen.has(complement)) {
            result.push([arr[i], complement]);
        }

        seen.add(arr[i]);
    }

    return result;
}

console.log(sumArray([2, 1, 4, 3], 5)); // output: [[3, 2], [4, 1]]
console.log(sumArray([1, 8, 10, 3], 11)); // output: [[1, 10], [3, 8]]

