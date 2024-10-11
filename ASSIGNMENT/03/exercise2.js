// Nama : Zulfan Ariq Asidqi
// ReactJs 02
// Kode Peserta : RJO209

function threeStepsAB(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}

console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
