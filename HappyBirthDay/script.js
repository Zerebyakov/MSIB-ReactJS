// NAMA : ZULFAN ARIQ ASIDQ
// REACTJS 02
// KODE PESERTA : RCJ02S009

document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Silakan masukkan nama kamu:");
    let nameElement = document.querySelector(".name");
    let cardGreeting = document.querySelector(".card-inside p:first-of-type");
    
    if (userName) {
        nameElement.textContent = userName;
        cardGreeting.textContent = `Dear ${userName},`; 
    }
});
