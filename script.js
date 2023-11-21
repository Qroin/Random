function startAnimation() {
    animateButton();
    setTimeout(pickWinner, 1000);
}

function animateButton() {
    var button = document.querySelector("button");
    anime({
        targets: button,
        scale: 1.1,
        duration: 500,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: 2
    });
}

function pickWinner() {
    var participants = ["참가자1", "참가자2", "참가자3", "참가자4", "참가자5"];
    var winner = participants[Math.floor(Math.random() * participants.length)];

    var resultElement = document.getElementById("result");
    resultElement.textContent = "축하합니다! " + winner + " 님은 당첨되셨습니다!";
}
