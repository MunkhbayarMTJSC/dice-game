// Тоглогчийн ээлжийн хадгалах хувьсагч
// Player 1 - 0, Player 2 - 1 гэж тэмдэглэв
var activePlayer = 0;
// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores= [0, 0];
// Ээлжийн оноо
var roundScore = 0;
// Шоо хаях үед 1-6 хүртэлх санамсаргүйгээр хадгалах хувьсагч хэрэгтэй
var diceNumber = Math.floor(Math.random() * 6) + 1;
// Программ эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Roll Dice товчин дээр дархад дуудах функцийг эвэнт листенерт холбоно
document.querySelector(".btn-roll").addEventListener("click", function () {
    // Шоо хаях үед 1-6 хүртэлх санамсаргүйгээр хадгалах хувьсагч хэрэгтэй
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
});
