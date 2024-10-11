function threeStepsAB(text) {
    // Loop melalui setiap karakter dalam string
    for (let i = 0; i < text.length; i++) {
        // Periksa apakah karakter adalah 'a' dan 3 karakter setelahnya adalah 'b'
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        // Periksa apakah karakter adalah 'b' dan 3 karakter setelahnya adalah 'a'
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }
    // Jika tidak ditemukan sama sekali
    return false;
}

console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
