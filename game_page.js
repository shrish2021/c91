player1Name = localStorage.getItem("Player1");
player2Name = localStorage.getItem("Player2");
document.getElementById("Player1").innerHTML = player1Name + " : ";
document.getElementById("Player2").innerHTML = player2Name + " : ";

player1Score = 0;
player2Score = 0;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("Lowercase word - " + word)

    chatAt1 = word.charAt(1);
    console.log(chatAt1);

    lengthDivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide2);
    console.log(charAt2);

    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);
    console.log("charAt3");

    removeCharAt1 = word.replace(chatAt1, "_");
    removeCharAt2 = removeCharAt1.replace(chatAt2, "_");
    removeCharAt3 = removeCharAt2.replace(chatAt3, "_");
    console.log(removeCharAt3);

    questionWord = "<h4 id='word_display'> Q. " + removeCharAt3 + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='input_check_box'>";
    checkButton = "<br><br><button type='button' class='btn btn-info' onclick='check()'>Check</button>";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}