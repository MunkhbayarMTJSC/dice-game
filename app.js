// Тоглогчийн ээлжийн хадгалах хувьсагч
// Player 1 - 0, Player 2 - 1 гэж тэмдэглэв
var activePlayer = 0;
// Тоглогчидын цуглуулсан оноог хадгалах хувьсагч
var scores= [0, 0];
// Ээлжийн оноо
var roundScore = 0;
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
    // Шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";
    // Шоо хаяхад буусан зургийг харгалзуулж харуулна
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь нэгээс ялгаатай бол идэвхтэй тоглогчийн тоог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
        // 1 ээс ялгаатай буусан тул тоглогчийн ээлжийн оноог нэмнэ
        roundScore += diceNumber;
        document.getElementById("current-"+activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг солино
        changePlayer();
    }
});

// Hold товчин дээр дарах үед дуудах функц
document.querySelector(".btn-hold").addEventListener("click", function () {
    // Идэвхтэй тоглогчийн үеийн оноог цуглуулсан оноон дээр нэмж үеийн оноог тэглэнэ
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг шалгах
    if (scores[activePlayer] > 100) {
        //hojloo
        document.getElementById("name-" + activePlayer).textContent = "WINNER!"
        document.querySelector(".player-"+ activePlayer + "-panel").classList.toggle('winner')
    } else {
        changePlayer();
    }
    
});

// Шинэ тоглоом эхлүүлэх эвэнт листенер
document.querySelector(".btn-new").addEventListener("click", function () {
    alert("new tovch");
})

function changePlayer() {
document.getElementById("current-" + activePlayer).textContent = 0;
    document.querySelector(".player-"+ activePlayer + "-panel").classList.remove('active')
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //Улаан цэгийг шилжүүлнэ
    document.querySelector(".player-"+ activePlayer + "-panel").classList.add('active')
    diceDom.style.display = "none"
}