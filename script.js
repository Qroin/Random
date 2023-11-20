function pickWinner() {
    // 랜덤으로 제비를 뽑는 로직
    var participants = ["참가자1", "참가자2", "참가자3", "참가자4", "참가자5"];
    var winner = participants[Math.floor(Math.random() * participants.length)];

    // 결과를 표시
    var resultElement = document.getElementById("result");
    resultElement.textContent = "축하합니다! " + winner + " 님은 당첨되셨습니다!";
}
